input_stdin_array = [4,-1,10,16,18];
input_currentline = 0;

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge) {
    this.age = +initialAge;

    // Add some more code to run some checks on initialAge
    this.setValidAge = function() {
        if (this.age < 0) {
            console.log("Age is not valid, setting age to 0.");
            this.age = 0;
        } else {
            this.age = +this.age;
        }
    };

    this.amIOld = function() {
        this.setValidAge();
        // Do some computations in here and print out the correct statement to the console
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    };

    this.yearPasses = function(){
        // Increment the age of the person in here
        this.age+=1;
    };

    return this;
}


function main() {
    var T=parseInt(readLine());
    for(i=0;i<T;i++){
        var age=parseInt(readLine());
        var p=new Person(age);
        p.amIOld();
        for(j=0;j<3;j++){
            p.yearPasses();
            
        }
        p.amIOld();
        console.log("");
    }
}

main();