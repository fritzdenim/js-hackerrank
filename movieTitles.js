var https = require('https');

function getMovieTitles(substr) {

    https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title='+substr+'&pageNumber'+pages, (res) => {
        var movieList = [];
        var pages = 0;

        // Get pages of movies first;
        https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title='+substr, (res) => {
          res.on('data', (d) => {
              var data = JSON.parse(d);
              pages = JSON.stringify(data.total_pages);
          });
        });

      console.log(pages);

      res.on('data', (d) => {
        // var data = JSON.parse(d);
        // var movies = d.data;
        var data = JSON.parse(d);
        var movies = data.data;
        // console.log(movies);

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
