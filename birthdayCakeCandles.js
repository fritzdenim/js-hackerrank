function birthdayCakeCandles(ar) {
    var candles = ar;
    let candleCopy = Object.create(candles);

    let tallestCandle = candleCopy.sort((a,b)=> a-b).pop();
    // console.log(candles, tallestCandle);

    let totalTallCandles = 0;
    for (var i=0; i<candles.length; i++) {
        if (candles[i]===tallestCandle) {
            totalTallCandles++;
        }
    }

    return totalTallCandles;
}

let answer = birthdayCakeCandles([3,2,1,3]);
console.log(answer);