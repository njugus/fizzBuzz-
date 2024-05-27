
function fizzBuzz(num){
    if(num % 15 ===  0){
         return "FizzBuzz";   
    }
    else if(num % 3 === 0){
        return "Fizz";    
    }
    else if(num % 5 === 0){
        return "Buzz";  
    }
    else{
        return num;
    } // This closing brace is for the else block
} // This closing brace is for the fizzBuzz function

module.exports = { fizzBuzz };