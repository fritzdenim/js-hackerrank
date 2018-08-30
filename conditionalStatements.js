function conditionalStatements(N) {
    if (N%2==1) {
        console.log("Weird");
    } else if (N>=2 && N<=5) {
        console.log("Not Weird");
    } else if (N>=6 && N<=20 && N%2==2) {
        console.log("Weird");
    } else if (N>20) {
        console.log("Not Weird");
    } else {
        console.log("Weird");
    }
}

conditionalStatements(18);