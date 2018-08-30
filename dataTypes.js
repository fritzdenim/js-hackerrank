function dataTypes(input_stdin_array) {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";

    // Declare second integer, double, and String variables.
    myI = parseInt(input_stdin_array[0]);
    myD = parseFloat(input_stdin_array[1]);
    myS = input_stdin_array[2];

    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    console.log(i+myI);

    // Print the sum of the double variables on a new line.
    console.log(parseFloat(d+myD).toFixed(1));

    // Concatenate and print the String variables on a new line
    console.log(s + myS);    
}

dataTypes([3,2.8,"is my favorite platform!"]);