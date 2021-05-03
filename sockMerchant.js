

function sockMerchant(n, ar) {
    let pairs = 0;

    const uniqueSocks = ar.filter( (value, i, arr) => arr.indexOf(value) === i );

    // Initialize sock groups
    const socks = {};
    uniqueSocks.map( sockColor => {
        socks[sockColor] = 0;
    });

    // Count socks
    uniqueSocks.map( uniqueSockColor => {
        const uniqeSockColorCount = ar.filter( sockColor => uniqueSockColor === sockColor );
        socks[uniqueSockColor] = uniqeSockColorCount.length;
    });

    console.log(socks);

    // Pair socks
    for ( const sockColor in socks ) {
        pairs = pairs + Math.floor(socks[sockColor]/2);
        console.log(pairs);
    }

    return pairs;
}


let result = 0

// Cases
const firstCase = [1,2,1,2,1,3,2];
result = sockMerchant(firstCase.length, firstCase);
console.log(result === 2, `Should be equal to 2, given ${result}`);

const secondCase = [1,1,3,1,2,1,3,3,3,3];
result = sockMerchant(secondCase.length, secondCase);
console.log(result === 4, `Should be equal to 4, given ${result}`);

