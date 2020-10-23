
require('dotenv').config()

const express = require('express');
const app = express();


const path = require('path');

const publicPath = path.join(__dirname,'..','build','static');
const buildPath = path.join(__dirname,'..','build');

const port = parseInt(process.env.PORT,10);

app.use('/static',express.static(publicPath));
const filepath = path.join(buildPath,'index.html');

console.log(filepath);

app.get('*',(req,res) => {

    
    res.sendFile(filepath);

})

app.listen(port, () => {
    console.log('Server is up!');
 });