// Complete the arrange function below.
function arrange(sentence) {
    var words = sentence.split(" ");

    words.sort();
    words.sort(function(a,b) {
        return a.length - b.length;
    });

    // for (let i=0; i<words.length;i++) {
    //     let word = words[i];
    //     let newWord = [];
    //     for (j=0;j<word.length; j++) {
    //         var character = word[j];
    //         if(/^[A-Z][a-z]$/.test(character)) {
    //             newWord.push(character);
    //         }
    //     }
    //     console.log(newWord);
    // }

    // var newSentence = words.join(" ");
    // for (let i=0;i<newSentence.length;i++) {
    //     if (/^[A-Z][a-z]$/.test(newSentence))
    //         newSentence.splice(1,0);
    // }

    console.log(words.join(" "));
}

arrange("The lines are printed in reverse order.");
