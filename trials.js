const { number } = require("yargs");
module.exports = {printNumbers, fizzBuzz};

let myNumbers = [];
function printNumbers() {

    for(i = 1; i <= 100; i++){
        myNumbers.push(i);
    }
}


function fizzBuzz(){
    myNumbers.forEach(x => {
        if((x % 3 === 0)&& (x % 5 === 0)){
            console.log("FizzBuzz");
            
        }
        else if(x % 3 === 0){
            console.log("Fizz");
            
        }
        else if(x % 5 === 0){
            console.log("Buzz");
            
        }

        else{
            console.log(x);
    }});

}

printNumbers();
fizzBuzz();