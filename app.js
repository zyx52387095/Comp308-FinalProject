
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');

const appRoutes = require('./routes/app');
const loginRoutes = require('./routes/login.route');
const nurseRoutes = require('./routes/nurse.route');
const patientRoutes = require('./routes/patient.route');

const env = process.env.DEPLOY || "dev";
const conf=require('./config/'+env+".json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Create the database connection 
mongoose.connect(conf.dburl); 

app.set('view engine', 'ejs');


//adding express middleware to serve static pages - e.g style.css
//app.use("/public", express.static(__dirname+'/public'));

app.use('/', appRoutes);
app.use('/login', loginRoutes);
app.use('/patient', patientRoutes);
app.use('/nurse',nurseRoutes);

//set view engine to be ejs engine
app.set('view engine', 'ejs');


app.listen(conf.patientRoutes);
console.log("app started on port ", conf.port);