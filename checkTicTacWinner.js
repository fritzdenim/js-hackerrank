const checkWinner = function(plays) {
    const players = [
        { name: "Player 1", icon: "x" },
        { name: "Player 2", icon: "o" }
    ];

    let message = 'No winners';

    players.map( player => {
        const playerIcon = player.icon.toLowerCase();

        const playResults = plays.map( (row, x) => row.map( (col, y) => col === playerIcon) );

        // Check if horizontally won
        const hasWonHorizontally = playResults
            .map( col => col.reduce((a,b) => a && b) )
            .some( value => value === true );
        if (hasWonHorizontally) { message = `${player.name} wins horizontally`; }

        // Check if vertically won
        const reversePlay = plays[0].map((col, colIndex) => plays.map(row => row[colIndex]));
        const reversePlayResults = reversePlay.map( (row, x) => row.map( (col, y) => col === playerIcon) );
        const hasWonVertically = reversePlayResults
            .map( col => col.reduce((a,b) => a && b) )
            .some( value => value === true );
        if (hasWonVertically) { message = `${player.name} wins vertically`; }

        // // Check if diagonally won
        const didWinDiagonallyLeft = playResults[0][0] && playResults[1][1] && playResults[2][2];
        const didWinDiagonallyRight = playResults[2][0] && playResults[1][1] && playResults[0][2];
        if (didWinDiagonallyLeft || didWinDiagonallyRight) {
            message = `${player.name} wins diagonally`;
        }
    });

    return message;
};


// Player 1 Horizontal Plays
const xWinsFirstRowHorizontally = [
  ['x','x','x'],
  ['','',''],
  ['o','o','']
];

const xWinsSecondRowHorizontally = [
    ['','',''],
    ['x','x','x'],
    ['o','o','']
];

const xWinsThirdRowHorizontally = [
    ['','','o'],
    ['o','',''],
    ['x','x','x']
];


// Player 1 Vertical Plays
const xWinsFirstColumnVertically = [
    ['x','o',''],
    ['x','','o'],
    ['x','','']
];

const xWinsSecondColumnVertically = [
    ['x','o',''],
    ['x','','o'],
    ['x','','']
];
const xWinsThirdColumnVertically = [
    ['','','x'],
    ['o','o','x'],
    ['','','x']
];

// Player 1 Diagonal Plays
const xWinsDiagonallyLeftToRight = [
    ['x','o','o'],
    ['','x',''],
    ['x','o','x']
];

const xWinsDiagonallyRightToLeft = [
    ['x','o','x'],
    ['','x','o'],
    ['x','o','o']
];


// Player 2 Horizontal Plays
const oWinsFirstRowHorizontally = [
    ['o','o','o'],
    ['','',''],
    ['x','x','']
];

const oWinsSecondRowHorizontally = [
    ['','','x'],
    ['o','o','o'],
    ['x','','']
];

const oWinsThirdRowHorizontally = [
    ['x','','x'],
    ['','',''],
    ['o','o','o']
];


// Player 2 Vertical Plays
const oWinsFirstColumnVertically = [
    ['o','x',''],
    ['o','',''],
    ['o','','x']
];

const oWinsSecondColumnVertically = [
    ['x','o',''],
    ['','o','x'],
    ['','o','']
];
const oWinsThirdColumnVertically = [
    ['','','o'],
    ['','x','o'],
    ['x','','o']
];


// Player 2 Diagonal Plays
const oWinsDiagonallyLeftToRight = [
    ['o','x','x'],
    ['','o',''],
    ['o','x','o']
];

const oWinsDiagonallyRightToLeft = [
    ['o','x','x'],
    ['','o','o'],
    ['x','x','o']
];


// No Winners
const noWinners1 = [
    ['x','o','o'],
    ['o','x','x'],
    ['x','o','o']
];

const noWinners2 = [
    ['x','o','o'],
    ['','x',''],
    ['x','o','o']
];

const noWinners3 = [
    ['','',''],
    ['','',''],
    ['','','']
];

const noWinners4 = [
    ['a','',''],
    ['','b',''],
    ['','','c']
];

// Unit tests
// Player 1 should win horizontally
console.log("\nPlayer 1 wins Horizontally:");
let didWin = checkWinner(xWinsFirstRowHorizontally);
console.log(didWin === "Player 1 wins horizontally", "X should win horizontally: first row", ` ==> message: ${didWin}`);

didWin = checkWinner(xWinsSecondRowHorizontally);
console.log(didWin === "Player 1 wins horizontally", "X should win horizontally: second row", ` ==> message: ${didWin}`);

didWin = checkWinner(xWinsThirdRowHorizontally);
console.log(didWin === "Player 1 wins horizontally", "X should win horizontally: third row", ` ==> message: ${didWin}`);


// Player 1 should win vertically
console.log("\nPlayer 1 wins Vertically:");
didWin = checkWinner(xWinsFirstColumnVertically);
console.log(didWin === "Player 1 wins vertically", "X should win vertically: first column", ` ==> message: ${didWin}`);

didWin = checkWinner(xWinsSecondColumnVertically);
console.log(didWin === "Player 1 wins vertically", "X should win vertically: second column", ` ==> message: ${didWin}`);

didWin = checkWinner(xWinsThirdColumnVertically);
console.log(didWin === "Player 1 wins vertically", "X should win vertically: third column", ` ==> message: ${didWin}`);


// Player 1 should win diagonally
console.log("\nPlayer 1 wins Vertically:");
didWin = checkWinner(xWinsDiagonallyLeftToRight);
console.log(didWin === "Player 1 wins diagonally", "X should win diagonally: left to right", ` ==> message: ${didWin}`);

didWin = checkWinner(xWinsDiagonallyRightToLeft);
console.log(didWin === "Player 1 wins diagonally", "X should win diagonally: right to left", ` ==> message: ${didWin}`);


// Unit tests
// Player 2 should win horizontally
console.log("\nPlayer 2 wins Horizontally:");
didWin = checkWinner(oWinsFirstRowHorizontally);
console.log(didWin === "Player 2 wins horizontally", "O should win horizontally: first row", ` ==> message: ${didWin}`);

didWin = checkWinner(oWinsSecondRowHorizontally);
console.log(didWin === "Player 2 wins horizontally", "O should win horizontally: second row", ` ==> message: ${didWin}`);

didWin = checkWinner(oWinsThirdRowHorizontally);
console.log(didWin === "Player 2 wins horizontally", "O should win horizontally: third row", ` ==> message: ${didWin}`);


// Player 2 should win vertically
console.log("\nPlayer 2 wins Vertically:");
didWin = checkWinner(oWinsFirstColumnVertically);
console.log(didWin === "Player 2 wins vertically", "O should win vertically: first column", ` ==> message: ${didWin}`);

didWin = checkWinner(oWinsSecondColumnVertically);
console.log(didWin === "Player 2 wins vertically", "O should win vertically: second column", ` ==> message: ${didWin}`);

didWin = checkWinner(oWinsThirdColumnVertically);
console.log(didWin === "Player 2 wins vertically", "O should win vertically: third column", ` ==> message: ${didWin}`);


// Player 2 should win diagonally
console.log("\nPlayer 2 wins Diagonally:");
didWin = checkWinner(oWinsDiagonallyLeftToRight);
console.log(didWin === "Player 2 wins diagonally", "O should win diagonally: left to right", ` ==> message: ${didWin}`);

didWin = checkWinner(oWinsDiagonallyRightToLeft);
console.log(didWin === "Player 2 wins diagonally", "O should win diagonally: right to left", ` ==> message: ${didWin}`);


// No winners
console.log("\nNo winners:");
didWin = checkWinner(noWinners1);
console.log(didWin === "No winners", "Should have no winners after end", ` ==> message: ${didWin}`);

didWin = checkWinner(noWinners2);
console.log(didWin === "No winners", "Should have no winners if game not ended", ` ==> message: ${didWin}`);

didWin = checkWinner(noWinners3);
console.log(didWin === "No winners", "Should have no winners if empty", ` ==> message: ${didWin}`);

didWin = checkWinner(noWinners4);
console.log(didWin === "No winners", "Should have no winners for unknown characters", ` ==> message: ${didWin}`);