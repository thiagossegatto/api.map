const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
//const bodyParser = require("body-parser")

const app = express();

const server = require('http').Server(app);

mongoose.connect('mongodb://rent-map:rentmap123@ds155665.mlab.com:55665/rent-map', {
  useNewUrlParser: true
});

app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
app.use(require('./routes'));

server.listen(3005, () => {
  console.log(":) Server started on port 3005");
});
