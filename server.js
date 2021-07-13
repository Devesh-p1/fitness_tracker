const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const password = require("./ignore/ignore.js")
const PORT = process.env.PORT || 3000;

const User = require("./models/model.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://devesh:"+password+"@cluster0.h4dgy.mongodb.net/over9000db?retryWrites=true&w=majority", { 
  useNewUrlParser: true.valueOf,
  // useFindandModify: false,
  useUnifiedTopology: true  
});

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/viewRoutes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

console.log(password)