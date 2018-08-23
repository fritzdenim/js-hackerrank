function minmaxsum(arr) {

    // Sum everything up.
    var total = [];
    for (var i=0; i<arr.length; i++) {
        // Create multiple sets and store it in newArr
        let newArr = [];
        for (var j=0; j<arr.length;j++) {
            if (i!==j) {
                newArr.push(arr[j]);
            }
            // console.log(i, j, arr[j]);
        }

        total.push(newArr.reduce((a,b) => a+b));
        // console.log(total, newArr);
    }

    let sorted = total.sort((a,b) => a-b);
    let max = sorted.pop();
    let min = sorted.reverse().pop();

    console.log(min,max);
}

let answer = minmaxsum([1,2,3,4,5]);
console.log(answer);