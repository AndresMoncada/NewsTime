const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const app = express();
const moment = require('moment')
app.locals.moment = moment;


//sets
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//req.body 
//app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rutas
app.use(require('./routes/'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

// init server
app.listen(3000, () => {
    console.log('Server on port 3000');
});


