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

/*
console.log("- First task:");
desafioArr(students, 1);

console.log("- Second task:");
desafioArr(students, 2);

console.log("- Third task:");
desafioArr(students, 3);
*/

// ################### CHALLENGE 12 ###################

//     ####### PART 1 - SPECIFIC METHODS #######


// Array of employees objects
/*const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    }
]

// print employees names
const somenteNomes = colaboradores.map(colaborador =>{
    return colaborador.name;
})

//print only front-end employees
const printFrontEnd = colaboradores.filter(colaborador =>{
    return colaborador.cargo == 'front-end';
})


//print only the first employee over 23 yo
const maiorDe23 = colaboradores.find(colaborador =>{
    return colaborador.idade > 23;
})

//print if every employee's age is over 18
const maiorDe18 = colaboradores.every(colaborador =>{
    return colaborador.idade > 18;
})

//print if at least one employee is an intern
const temEstagiario = colaboradores.some(colaborador =>{
    return colaborador.cargo = 'estagiario';    
})

/*

// testing zone

console.log(somenteNomes);
console.log(printFrontEnd);
console.log(maiorDe23);


if (maiorDe18) {
    console.log("Todos os colaboradores são maiores de 18 anos.");
} else {
    console.log("Nem todos os colaboradores são maiores de 18 anos.");
}

if (temEstagiario) {
    console.log("Existe pelo menos um estagiário colaborador.");
} else {
    console.log("Não existe nenhum estagiário colaborador.");
}

*/

//     ####### PART 2 - REDUCE AND SORT #######


// Array of employees objects
const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    }
]

// ==== REDUCE TASKS =====

// sum of all employee's age
const somaIdades = colaboradores.reduce((soma, colaborador)=>{
    return soma + colaborador.idade;
}, 0)


// employees role counter   
const quantidadePorCargo = colaboradores.reduce((cont, colaborador)=> {
        let cargo = colaborador.cargo;
        // checks if the role exists, if is not then add 1 to the new role
        if (!cont[cargo]) {
            cont[cargo] = 1;
        } else { // else the role exists, so is sum + 1 to the count
            cont[cargo] = cont[cargo] + 1;
        }
        
        return cont;
}, {})

// employees role counter <BUT BETTER>
const quantidadePorCargo_ButBetter = colaboradores.slice().reduce((cont, colaborador)=> {
    //there is a condition inside the variable testing if the role counter exists(i.e. true); if is true add 1, if is not the zero is add to 1, iniciating the new role counter.
    cont[colaborador.cargo] = (cont[colaborador.cargo] || 0) + 1;
    return cont;
}, {})

// testing area
/*

console.log("Soma das idades dos colaboradores: ", somaIdades);

console.log(quantidadePorCargo);

//console.log(quantidadePorCargo_ButBetter);

*/


// ==== SORT TASKS =====


// sorting employees by their age  (crescent)
const sortIdadeCrescente = colaboradores.slice().sort((colab1, colab2) =>{
    return colab1.idade - colab2.idade;
})

// sorting employees by their age  (decrescent)
const sortIdadeDecrescente = colaboradores.slice().sort((colab1, colab2) =>{
    return colab2.idade - colab1.idade;
})


// sorting the employees by their role, following this order:

// 1 estagiário
// 2 front-end 
// 3 back-end
// 4 designer

/*


// FIRST PART:

// maping their role by chanching their name with Map method, creating a new array with name: "<role order> Name". Example: "2 Juca", "1 Fernando" etc.
 
const newArr = colaboradores.map(colaborador =>{
    if (colaborador.cargo == "estagiario"){
      colaborador.name = "1 " + colaborador.name; 
    } else if (colaborador.cargo == "front-end"){
      colaborador.name = "2 " + colaborador.name;
    } else if (colaborador.cargo == "back-end"){
      colaborador.name = "3 " + colaborador.name;
    } else if (colaborador.cargo == "designer"){
      colaborador.name = "4 " + colaborador.name;
    } 
    return colaborador;
})

// SECOND PART:

//sorting by number in the rebuild attribute name:
const sortPorCargo = newArr.slice().sort((a, b) => (a.name > b.name) ? 1 : -1 )


// RESULT : 

//"[
 // { name: '1 Fernando', idade: 19, cargo: 'estagiario' },
 // { name: '2 Juca', idade: 25, cargo: 'front-end' },
 // { name: '2 Jéssica', idade: 23, cargo: 'front-end' },
 // { name: '3 Fabiane', idade: 25, cargo: 'back-end' },
 // { name: '3 Márcia', idade: 23, cargo: 'back-end' },
 // { name: '4 Vitória', idade: 28, cargo: 'designer' }
//]"

*/


//sorting the employees by their role <BUT BETTER>

// this method is better and smart than the previous one


// first using a hash/dictionary to map the roles to numbers 
const hashHierarchy = 
  {'estagiario' : 1,
   'front-end'  : 2,
   'back-end'   : 3,
   'designer'   : 4}

// then is possible to sort by roles passing the hash[role] in the comparison that translate to numbers. 
const sortPorCargo_ButBetter = colaboradores.slice().sort((a, b) => (hashHierarchy[a.cargo] > hashHierarchy[b.cargo]) ? 1 : -1 )


const sortPorIdadeECargo = colaboradores.slice().sort((colab1, colab2) =>{
    //check if the two are equal
    if(colab1.idade == colab2.idade){
        //make just the same thing as the previous task
        return (hashHierarchy[colab1.cargo] > hashHierarchy[colab2.cargo]) ? 1 : -1;
    }else{
        //make just the same thing as the age task
        return colab1.idade - colab2.idade;
    }
})




// testing area

// obs: please test one at the time!


//console.log(sortIdadeCrescente);
//console.log(sortIdadeDecrescente);


//console.log(sortPorCargo_ButBetter);

//console.log(sortPorIdadeECargo);




// ################### CHALLENGE 15 ###################
//     === Promises and asynchronous function ===

const p1 = () => {
    return new Promise (
        (resolve, reject) => {
            setTimeout(() => {
                resolve("Resolveu p1.");
            }, 3000);
        }
    )}

const p2 = () => {
    return new Promise (
        (resolve, reject) => {
            setTimeout(() =>{
                reject("Rejeitou p2.");
            }, 1000)
        }
    )
}

const p3 = () => {
    return new Promise (
        (resolve, reject) => {
            setTimeout(() => {
                resolve("Resolveu p3.");
            }, 1000)
        }
    )
}

// testing the rejected promises cenario
// wrapped into a async function
async function testandoPromises() {
    try {
      const res = await Promise.all([p1(),p2(),p3()]);
      console.log(res);  
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Terminou a execução do teste.");
    }
    
}


// testing the resolved promises cenario
// wrapped into a async function
async function testandoPromisesQueDeramCertoAmem() {
    try {
      const res = await Promise.all([p1(),p3()]);
      console.log(res);
    } catch (error){
      console.log("if you seeing this that means you probably f*cked up.");
    } finally {
      console.log( "Esse é o final das que deram certo.");
    }


}


//testing area

//testandoPromises();
//testandoPromisesQueDeramCertoAmem();
