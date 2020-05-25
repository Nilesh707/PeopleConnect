const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const loationSchema = new mongoose.Schema(
  {
    citynames: {
      type: [],
      required: true,
      maxlength: 32,
      unique: true,
    },
    statename: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "State",
      required: true,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Location", loationSchema);
