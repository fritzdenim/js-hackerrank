const assert = require('assert');

// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
    A.sort((a,b)=>a-b);
    const maxNum = Math.max(...A);

    let numbers = Array(...Array(maxNum+1).keys());
    numbers.shift();

    const missingNumbers = numbers.filter(n=>!A.includes(n) && n>0);

    let missingNumber = 0;
    if (missingNumbers.length>=1) {
        missingNumber = missingNumbers[0];
    } else if (numbers.length>=1 && missingNumbers.length===0) {
        missingNumber = maxNum + 1;
    } else {
        missingNumber = 1;
    }

    console.log("num",numbers,missingNumbers,maxNum,missingNumber);
    return missingNumber;
}

let sol = solution([1,3,6,4,1,2]);
let number = 5;
assert.equal(sol,number,`should equal to ${number} got ${sol}`);

sol = solution([1,2,3]);
number = 4;
assert.equal(sol,number,`should equal to ${number} got ${sol}`);

sol = solution([-1,-3]);
number = 1;
assert.equal(sol,number,`should equal to ${number} got ${sol}`);
