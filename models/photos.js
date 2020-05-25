const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const photosSchema = new mongoose.Schema(
  {
    images: [
      {
        data:Buffer,
        contentType:String,
        name : String

      },
    ],
    // validate: {
    //   isAsync: true,
    //   validator: function (value, isValid) {
    //     const self = this;
    //     return self.constructor
    //       .findOne({ link: value })
    //       .exec(function (err, user) {
    //         if (err) {
    //           throw err;
    //         } else if (user) {
    //           if (self.id === user.id) {
    //             // if finding and saving then it's valid even for existing email
    //             return isValid(true);
    //           }
    //           return isValid(false);
    //         } else {
    //           return isValid(true);
    //         }
    //       });
    //   },
    //   message: "-1",
    // },
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    // info: {
    //   type: ObjectId,
    //   ref: "Info",
    //   required: true,
    // },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "State",
      required: true,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photosSchema);
