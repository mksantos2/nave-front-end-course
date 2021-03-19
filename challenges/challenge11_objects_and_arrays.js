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


// testing area
/* 
console.log("- First task:");
desafioArr(students, 1);

console.log("- Second task:");
desafioArr(students, 2);

console.log("- Third task:");
desafioArr(students, 3);
*/