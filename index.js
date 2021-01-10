const express = require('express');
const bodyParser =require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const port = process.env.PORT || 3003;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//cargar recursos estaticos
app.use(express.static('public'));
//app.use('/static', express.static(C:\Users\kathy\Documents\Programación web\PrimerApp + '/public'));
app.use('/static', express.static(__dirname + '/public'));

//use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// route our app
const router = require('./app/routes');
app.use('/',router);

//start the server
app.listen(port, function() {
    console.log('app started in port 3003');
    });

  // app.listen(3000);