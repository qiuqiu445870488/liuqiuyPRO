const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
var news = require("./routes/dongtai.js")


var  app = express();
var server = app.listen(4000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/news',news);