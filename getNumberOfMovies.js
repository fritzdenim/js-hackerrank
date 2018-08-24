const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
function getNumberOfMovies(substr) {
    /*
     * Endpoint: "https://jsonmock.hackerrank.com/api/movies/search/?Title=substr"
     */
    https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title='+substr, (res) => {
      // console.log('statusCode:', res.statusCode);
      // console.log('headers:', res.headers);

      res.on('data', (d) => {
          var totalMovies = JSON.parse(d);
          // console.log(totalMovies.total);
          process.stdout.write(JSON.stringify(totalMovies.total));
      });
    });
    
}

getNumberOfMovies('spiderman')