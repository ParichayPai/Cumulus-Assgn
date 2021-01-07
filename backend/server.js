const express = require("express");
// const mongoose = require('mongoose');
var bodyParser = require('body-parser')
// const {url} = require('./config/keys')
const cors = require('cors');
const port = 5000;

const app = express();

app.use(bodyParser.json());

// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(_ => console.log('Server started!!'))
//     .catch(err => console.log("couldn't connect ", err));
app.use(
    cors({
      origin: "http://localhost:3000", // location of the react app were connecting to
      credentials: true,
    })
);

require("./routes")(app);

app.listen(port, () => console.log(`Running on port ${port}`))
