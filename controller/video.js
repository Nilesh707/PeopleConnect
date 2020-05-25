const Video = require("../models/video");
const Info = require("../models/info");
const State = require("../models/state");
const Category = require("../models/category");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return "error";
  }
}
exports.createVideo = (req, res) => {
  console.log(req.body+"link");
  let link = getId(req.body.link);
  
  req.body.link = `//www.youtube.com/embed/${link}`;
  console.log(req.body.link);

  Video.findOne({ link: new RegExp(req.body.link)  }, (error, video) => {
    if(video){
      console.log("found")
      return res.json("Video Link already exist !!");
    }
    else{
      console.log("Not found")
      const video = new Video(req.body);
      video.save((error, video) => {
        console.log(error);
        if (error || !video) {
          return res.status(400).json({
            error: "Saving Video In DB failed",
          });
        }
        res.json(video);
      });
    }
  })
  //console.log(Video.find({ link: req.body.link }, (error, video) => {}));
  // Video.find({ link: new RegExp(req.body.link)  }, (error, video) => {
  //   if (video.link) {
  //     console.log(error);
      
  //   } else {
      
  //   }
  // });

  // console.log(req.body.link);
};

exports.getVideoById = (req, res, next, id) => {
  Video.findById(id)
    .populate("state")
    .populate("category", "name")

    .exec((error, video) => {
      console.log(error);
      if (error || !video) {
        return res.status(400).json({
          error: "Video Not Found",
        });
      }
      req.video = video;
      console.log(req.video + "link");
      next();
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

exports.updateVideo = (req, res) => {
  console.log("aaya");
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (error, fields, file) => {
    // updation code
    let video = req.video;
    video = _.extend(video, fields);
    //save to the DB
    console.log(video);
    video.save((error, pro) => {
      console.log(error);
      if (error && !error.name == "ValidationError") {
        return res.status(400).json({
          error: "Updation of Video failed",
        });
      }
      console.log(pro);
      res.json(pro);
    });
  });
};

exports.deleteVideo = (req, res) => {
  const video = req.video;
  video.remove((error, video) => {
    if (error) {
      return res.status(400).json({
        error: "Video Not Found",
      });
    } else {
      return res.json({
        message: "Video Delete",
        video,
      });
    }
  });
};

exports.getAllVideos = (req, res) => {
  Video.find().exec((error, video) => {
    if (error) {
      return res.status(400).json({
        error: "No Videos found",
      });
    } else {
      return res.json(video);
    }
  });
};

exports.getVideosByCategoryId = (req, res) => {
  let categoryId = req.category;
  console.log(req.category);
  Video.find()
    .populate({
      path: "Category",
      match: { name: new RegExp(categoryId) },
    })
    .exec((error, videos) => {
      if (error || !videos) {
        return res.status(400).json({
          error: "No Videos found",
        });
      } else {
        videos = videos.filter(function (vide) {
          console.log(vide.category);
          //let a =vide.category vide.category.tostring()
          return (
            vide.category != undefined && vide.category.equals(categoryId._id)
          );
        });

        res.json(videos);
      }
    });
};

exports.createInfo = (req, res) => {
  console.log(req.video);
  const videoId = req.video._id
  const info = new Info(req.body);
  info.videoId = videoId
  info.save((error, info) => {
    console.log(error);
    if (error != null && error.name == "ValidationError") {
      return res.status(400).json({
        message: "Video Link Already Exists",
      });
    }
    return res.json(info);
  });
};

exports.getInfo = (req, res) => {
  const videoId = req.video;
  Info.find({ videoId: videoId }).exec((error, info) => {
    if (error || !info) {
      return res.status(400).json({
        error: "No info found",
      });
    }
    res.json(info);
  });
};
