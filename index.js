//Imports
const express = require('express')
const path  = require('path')
const {getHDFSFile} = require('./app/utils/helper')
//Initialisation
const app = express()
require("dotenv").config()


app.use('/res', express.static(path.join(__dirname, '/app/static'))) // Set static resource directory
app.set('view engine', 'pug') 
app.set('views', './app/views')

//Routes
app.get('/' , (req , res) => res.render('index') )

app.get('/getFile' , (req , res)=>{
    getHDFSFile(`${process.env.HDFS_BASE_PATH}/sample_result.txt` , res);
})


app.listen(process.env.PORT, function() {
    console.log(`Server started on ${process.env.PORT} `)
});