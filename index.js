const express = require('express')
const WebHDFS = require('webhdfs')
const request = require('request')
const {exec} = require('child_process')
require("dotenv").config()

const app = express()

app.set('view engine', 'pug') 
app.set('views', './app/views')





app.listen(process.env.PORT, function() {
    console.log(`Server started on ${process.env.PORT} `)
});