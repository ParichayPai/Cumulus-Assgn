const express = require("express");
// const mongoose = require('mongoose');
// const {url} = require("./config/keys");
const data = require('./data.json');

// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(_ => console.log('routing!!'))
//     .catch(err => console.log("couldn't connect", err));

module.exports = (app) => {
    app.get('/home', (req, res, next) => {
        res.json({
            results: data.length,
            total_pages: data.length/10,
            per_page: 10,
            data
        })
    })
}