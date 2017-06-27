var moviesJSON = require('../movies.json');


//Home Route
exports.home = function(req,res){
  var movies = moviesJSON.movies;

  /*
  var moviePosters = [];

  for (var i=0; i < movies.length ; i++){
    moviePosters = moviePosters.concat(movies[i].posters);
  }
  */

  res.render('home',{
    title: "Star Wars",
    movies: movies
  });
};


exports.movie_single = function(req,res){
  var episode_number = req.params.episode_number;
  res.send('This is the page for episode '+episode_number);
};

//Not found

exports.notFound = function(req,res){
  res.send('This is not the page you are looking for');
};
