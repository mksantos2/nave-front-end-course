/*
/// === TESTS ===

const test1 = function (a, b){
    return;
}

const test2 = (a, b) => a + b;


const test3 = (a, b) => {
    
    return a + b;

}

const func = arg => {
    console.log("Hello Dear", arg);
}

//func("moni");

*/


// === REAL SHIT ===


// ################### CHALLENGE 10 ###################


// Anonymous function subtraction returning x - y;

const subtrai = function (x, y){
    return x - y;
}


// Anonymous function isZero
// function_name = parameter => return <operation w/ ternary operator>

const testaZero = num => num ? false : true;
 

// Function testing if two numbers have opposite or same signs
function testaSinal (a, b){
    let zero =  testaZero(subtrai (a, b));
    // (x ^ y) < 0
    if (zero) {
        console.log("É zero.");
    }else if((a >= 0 && b < 0) || (a < 0 && b >= 0)){
        console.log("Subtração entre números de sinais diferentes.");
    }else if((a >= 0 && b>=0) || (a <=0 && b<=0)){
        console.log("Subtração entre números de mesmo sinal.");
    }

}


// Function testing if two numbers have opposite or equal signs --but better with a few less code--
function testaSinal_ButBetter (a, b){
    let zero =  testaZero(subtrai (a, b));
    if (zero) {
        console.log("É zero.");
    }else if((a ^ b) < 0){ // using the operation (x ^ y) < 0 to test the signs; if is true => they are different; if is not => they are the same sign.
        //example1: (2 ^ -1) = 0.5 --> 0.5 < 0 --> opposite
        //example2: (2 ^ 0) =  1   --> 1   < 0 --> equal
        console.log("Subtração entre números de sinais diferentes.");
    }else{
        console.log("Subtração entre números de mesmo sinal.");
    }

}


// testing the program

//testaSinal_ButBetter(1,1);
//testaSinal(1,1);