const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
  {
    videoId:{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Video",
      required: true,
    },

    fullname: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    infodescription :{
        type: String,
        required : true,
    },
    familymember:{
        type : Number
    },      
    infostate:{
        type: String,
        required : true
    },
    contactnumber :{
        type : Number,
        required : true
    }
  },
  { timestamps: true }

)

module.exports = mongoose.model("Info",infoSchema)