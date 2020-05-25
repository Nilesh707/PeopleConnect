const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


//Creating State
const stateSchema = new mongoose.Schema(
  {
    statename: {
      type: String,
      required: true,
      maxlength: 32,
      unique: true,
    },
    citynames:{
      type: [],
      required: true,
      maxlength: 32,
      unique: true,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("State",stateSchema)

