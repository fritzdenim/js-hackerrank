var https = require('https');

function getMovieTitles(substr) {
    https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title='+substr, (res) => {

      res.on('data', (d) => {
        // var data = JSON.parse(d);
        // var movies = d.data;
        var data = JSON.parse(d);
        var movies = data.data;
        // console.log(movies);

        var movieList = [];
        for (var i=0; i < movies.length; i++ ) {
            var movie = movies[i];
            movieList.push(movie.Title);
        }

        movieList.sort();

        for (var i=0; i<movieList.length;i++) {
            let movie = movieList[i];
            process.stdout.write(movie + "\n");
        }
      });
    });
}
getMovieTitles('spiderman');
