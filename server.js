const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//To use express-fileupload
app.use(fileUpload());
// Serve up static assets (usually on heroku)
// app.use(express.static(path.join(__dirname, './client/build')));
//     app.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, './client/build/'))
//     });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}
// Add routes, both API and view
app.use(routes);

//Serve static assets (build folder) if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fishbowl");

//Something Dmitry used for heroku?
// mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:password123@ds047197.mlab.com:47197/heroku_46bg7618");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
