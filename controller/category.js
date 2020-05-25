const Category = require("../models/category");


exports.getCategoryById = (req, res, next,id) => {
    // console.log(mongoose.Types.ObjectId.isValid(id));
     Category.findById(id)
      .populate("Category","_id name")
      .exec((error, cat) => {
       
       if (error || !cat) {
         return res.status(400).json({
           error: "CateGory Not Found",
         });
       };
       req.category = cat;
       console.log(req.category)
       next();
     });
   };
   
   exports.createCategory = (req, res) => {
     const category = new Category(req.body);
     category.save((error, categ) => {
       if (error) {
         return res.status(400).json({
           error: "Not able to Save Category in DB",
         });
       }
       res.json(categ);
     });
   };
   
   exports.getCategory = (req, res) => {
     return res.json(req.category);
   };
   exports.getAllCategory = (req, res) => {
     Category.find().exec((error, categories) => {
       if (error || !categories) {
         return res.status(400).json({
           error: "No Category in DB",
         });
       }
       res.json(categories);
     });
   };
   
   exports.updateCategory = (req, res) => {
     const category = req.category;
     category.name = req.body.name; // the above category we are taking name from body
   
     category.save((error, updateCategory) => {
       // saving the new category (two line above)
       if (error) {
         return res.status(400).json({
           error: "Update Failed",
         });
       }
       res.json(updateCategory);
     });
   };
   
   exports.removeCategory = (req, res) => {
     const category = req.category;
     category.remove((error, category) => {
       if (error) {
         return res.status(400).json({
           error: "Failed To Delete",
         });
       }
       res.json({
         message: "Successfully Deleted",
       });
     });
   };
   