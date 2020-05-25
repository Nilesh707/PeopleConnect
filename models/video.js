const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const videoSchema = new mongoose.Schema(
  {
    link:{ type : String , unique : true, required : true, dropDups: true },
    name: {
      type: String,
      trim: true,
      required: true,

      index: { unique: true, dropDups: true },
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
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

module.exports = mongoose.model("Video", videoSchema);
