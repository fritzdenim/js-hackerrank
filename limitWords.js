var assert = require('assert');

function solution(message,K) {
    let newMessage = message.slice(0,K);

    if (message.length <= K) {
        newMessage = message.slice(0,newMessage.length);
        console.log(newMessage,K,message.length);
    } else {
        newMessage = message.slice(0,newMessage.length);
        let lastSpace = newMessage.lastIndexOf(" ");
        newMessage = newMessage.slice(0,lastSpace);
        console.log(newMessage,lastSpace,K,message.length);
    }

    return newMessage;
}

let message = "Codility we test coders";
assert.equal("Codility we",solution(message,14));

message = "Why not";
assert.equal("Why not",solution(message,100));

message = "The quick brown fox jumped over the lazy dog";
// 41 should be the correct length of the K parameter,
// instead of 39 or 40 to display the word "lazy".
assert.equal("The quick brown fox jumped over the lazy",solution(message,41)); 

console.log("The quick brown fox jumped over the lazy".length);