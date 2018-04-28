
const express = require('express');
const app = express();

const appRoutes = require('./routes/app');

//adding express middleware to serve static pages - e.g style.css
app.use("/public", express.static(__dirname+'/public'));

//set view engine to be ejs engine
app.set('view engine', 'ejs');


app.use('/', appRoutes);

app.listen(3000);
console.log("app started on port ", 3000);