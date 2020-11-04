const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const setRoutes = require("./routes/index");
const mongoose = require("mongoose");
const uri = "mongodb+srv://yondraco:Hoa0964584027@cluster0.2itbt.mongodb.net/backend?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log("Connected");
  },
  err => {
    console.log(err);
  }
)


const app = express();
const port = 3000;

app.set('sessions', []);
app.use(express.static("./public")); // phuc vu cac dl chung cho cac file khac sd
app.set("views", "./views"); // xd thu muc goc chua views
app.set("view engine", "pug"); // xd view engine chung ta su dung
app.use(bodyParser.urlencoded({ extended: false, })); //dynamic web
// app.use(bodyParser.json()); //web api
app.use(cookieParser());
setRoutes(app);

app.listen(port, () => {
  console.log("Server is listening on port 3000.");
});
