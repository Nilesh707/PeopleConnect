const Photos = require("../models/photos");
const { State, City } = require("../models/state");
const Category = require("../models/category");
var multer = require("multer");
var fs = require("fs");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    //'  console.log(req)req.profile.
    var newPath = `../uploads/${req.profile.email}`;
    //console.log(newPath);
    callback(null, `./uploads/`);
  },
  filename: function (req, file, callback) {
      console.log()
    callback(null, Date.now() + req.body.name + "" + file.originalname);
  },
});

var upload = multer({ storage: storage }).array("photo", 10);

exports.createPhoto = (req, res) => {
  console.log(req.body)
  upload(req, res, function (err) {
    console.log(req.body);
  const { name, description, category, state, location } = req.body;
    
    console.log(req.files);
    if (err) {
      return res.end("Error uploading file.");
    }
    if (!description || !name || !category || !state || !location) {
      return res.status(400).json({
        error: "Please include all fields.",
      });
    }
    let photos = new Photos(req.body);

    for (let i = 0; i < req.files.length; i++) {
       photos.images.data= fs.readFileSync(req.files[i].path);
       photos.images.contentType = req.files[i].mimetype;
       photos.images.name = req.body.name;
       photos.images.push({
        contentType: req.files[i].mimetype,
        data: fs.readFileSync(req.files[i].path),
        name : req.body.name

      });
    }
    console.log(req.files.email)
    photos.save((error, photos) => {
        //console.log(error)
      if (error) {
        return res.status(400).json({
          error: "Create of Photos failed",
        });
      }
      const { name, description, category, state, location } = photos;
      res.json({photos:{
            name,
            description,
            category,
            state,
            location
      }});
    });
  });

 
};
// exports.removeProductById = (req, res) => {
//   let product = req.product;
//   product.remove((error, product) => {
//     if (error) {
//       return res.status(400).json({
//         error: "Failed in Delete",
//       });
//     }
//     res.json({
//       message: "Delete Successfull",
//       product,
//     });
//   });
// };

exports.getPhotosByCategoryId = (req, res) => {
    let categoryId = req.category;
    Photos.find()
       .select("-images")
      .populate({
        path: "Category",
        match: { name:new RegExp(categoryId)  },
      })
      .exec((error, photos) => {
      
        if (error || !photos) {
          return res.status(400).json({
            error: "No Videos found",
          });
        } else {
          photos = photos.filter(function(pho){
           console.log(pho.category)
           //let a =vide.category vide.category.tostring()
            return (
              
              pho.category!=undefined && pho.category.equals(categoryId._id ))
          })
     
          res.json(photos)
        }
      });
  };

  exports.getAllPhotos = (req, res) => {
    Photos.find().select("-images").exec((error, photo) => {
      if (error) {
        return res.status(400).json({
          error: "No Videos found",
        });
      }  
        res.json(photo);
      }
    )};
  
  