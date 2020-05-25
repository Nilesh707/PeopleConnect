require("dotenv").config();
const mongoose = require("mongoose")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer")
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override')
//My Routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const stateRoutes = require("./routes/state");
const categoryRoutes = require("./routes/category");
const videoRoutes = require("./routes/video");
const photoRoutes = require("./routes/photos")


//Connection To DB
mongoose.connect(process.env.DATABASE||'mongodb://localhost:27017/peopleconnect', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
   useFindAndModify: false,
   autoIndex: false, // Don't build indexes
   poolSize: 10, // Maintain up to 10 socket connections
   serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
   socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
   family: 4 // Use IPv4, skip trying IPv6
}).then(() => {
    console.log("DB CONNECTED");
  });





//PORT
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());



//My Routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",stateRoutes)
app.use("/api",categoryRoutes)
app.use("/api",videoRoutes)

app.use("/api",photoRoutes)

// app.use("/api",categoryStateLinkRoutes)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client-app/build'))
  
}

app.listen(port,()=>{
  
    console.log(`App is running at ${port}`)
})