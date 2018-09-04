function processData(input) {
    //Enter your code here
    //Enter your code here
    // var data = input.split("\n");

    for (var i=0; i<data.length; i++) {
        var inputEven = [];
        var inputOdd = [];
       
        if (isNaN(data[i])) {
            for (var j=0; j<data[i].length; j++) {
                if (j%2==1) {
                    inputOdd.push(data[i][j]);
                } else {
                    inputEven.push(data[i][j]);
                }
            }
            console.log(inputEven.join("") + " " + inputOdd.join(""));
        }

    }

}

processData([2,"Hacker","Rank"]);
