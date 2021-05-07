const tickets = [["New York", "Las Vegas"], ["Las Vegas", "Washington"], ["Washington", "Lima"]];
const tickets2 = [["Las Vegas", "Washington"], ["Washington", "Lima"], ["New York", "Las Vegas"]];

function getLastDestination(paths) {
  let departures = paths.map( path => path[0] );
  let destinations = paths.map( path => path[1]);
  
  // Get the final destination
  let finalDestination = "";
  destinations.map( destination => {
     if (!departures.includes(destination)) {
       finalDestination = destination;
     }
  });
  
  return finalDestination;
}

console.log(getLastDestination(tickets));
