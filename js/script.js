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


// ################### CHALLENGE 11 ###################

//          ####### PART 1 - OBJETCS #######


// object 'User' with unique attributes
const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
  

//First task: print object attributes with point reference

//console.log(user.nome);
//console.log(user.endereco.rua);
//console.log(user.projetos[1]);


//Second task: print object attributes with square brackets reference

/*

console.log("Nome: "+ user['nome']);
console.log("Endereço (Rua): "+user['endereco']['rua']);
console.log("Projeto: "+user['projetos'][1]);

let adressNum = 'numero';
let adress = 'endereco';

console.log("Número do Endereço do "+ user['nome'] + " é "+user[adress][adressNum]+".");
*/

//          ####### PART 2 - ARRAYS #######


//  Array of Students Objects

const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

function desafioArr(students, num){

    //function with 3 sub-operations:

    // if num = 1 : print the student's names
    // if num = 2 : print the students with age > 20
    // if num = 3 : create new array with students that have scholarship 
    
    switch (num) {
        case 1:
            //passing anonymous function as forEach parameter
            students.forEach(elem => {
                console.log(elem.name);
            });
            break;
        case 2:
            students.forEach(elem => {
                if (elem.age > 20){
                    console.log(elem);
                }
            });
            break;
        case 3:
            let newStudents = [];
            students.forEach(elem => {
                if (elem.scholarship){
                    newStudents = newStudents.concat(elem);
                }
            });
            console.log(newStudents);
            break;    
        default:
            // default option w/ warning message
            console.log("Digite o array e o numero da operação.");
            break;
    }
    console.log("\n");


}

console.log("- First task:");
desafioArr(students, 1);

console.log("- Second task:");
desafioArr(students, 2);

console.log("- Third task:");
desafioArr(students, 3);