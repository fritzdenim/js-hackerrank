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
    const distinct = (value,index,self)=> {
        return self.indexOf(value)===index;
    }

    let distinctA = A.filter(distinct);    
    distinctA.sort((a,b)=>a-b);

    const getFirstMissingNumber = () => {
        let missingNumber = 1;
        const maxNum = Math.max(...distinctA);
        for (let i=maxNum; i>1; i--) {
            if (!distinctA.includes(i)) {
                missingNumber = i;
            }
        }
        return (missingNumber > 1) ? missingNumber : maxNum + 1;
    };

    let missingNumber = getFirstMissingNumber();
    missingNumber = !missingNumber ? 1 : missingNumber;

    console.log("num",distinctA,missingNumber);
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

