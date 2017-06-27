var express   =   require('express');
var app       =   express();
var path      =   require('path');
//Set the view engine
app.set('view engine','ejs');

//Tells express that static paths are in the public directory
app.use(express.static(path.join(__dirname,'public')));

var routes = require('./routes');
//Home Route
app.get('/',routes.home);

//Episode Route
app.get('/star_wars_episode/:episode_number?',routes.movie_single);

//Not found
app.get('*',routes.notFound);

app.listen(process.env.PORT || 3000);
