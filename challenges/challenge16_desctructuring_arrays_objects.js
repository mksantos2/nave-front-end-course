// ################### CHALLENGE 16 ###################
//        === Destructuring Assignment and Rest Operator ===


// Task 1 

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
  


// PART 1

// testing destructuring assignments in user object
let { nome : name_user } = user;
let { endereco : {rua: street_user} } = user;
let { projetos : [projeto1, projeto2] } = user;
let { projetos : [, prop2] } = user;


//test area
console.log("Name : ", name_user);
console.log("Street : ", street_user);
console.log("Project 1 : ", projeto1);
console.log("Project 2 : ", projeto2);
console.log("Second Property : ", prop2);




// PART 2



const students = [
   {id: 1, name: 'John Doe', age: 23, scholarship: false},
   {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
   {id: 3, name: 'Kayle', age: 22, scholarship: true}
]



// testing destructuring assignments in students array
let [student1] = students;
let [,, student3 ] = students;
let [,{name : student2}] = students;


//test area
console.log("First Student : ", student1);
console.log("Second Student Name: ", student2);

console.log("Third Student : ", student3);





// Task 2 

//print whatever it is in the parameter
function imprimirArr(...rest) {
  console.log(...rest);

}

//destructuring objects through function parameter
function destruct({nome: name}) {
  console.log("Name :", name);
}

//combining two objects through function parameter
function combineObjects({...obj1}, {...obj2}) {
  const newObj = {
    obj1,
    obj2
  }
  console.log(newObj);
}


//concat 2 arrays elements with rest operator
function concatArrays([...arr1], [...arr2]) {
  const newArr = arr1.concat(arr2);
  console.log(newArr);
}


// testing area

// testing with strings
imprimirArr("amo", "voce", "shrek");

//testing with string and numbers
imprimirArr("amo", "voce", "shrek", 1000, "vezes");

destruct(user);

combineObjects(user, user);

concatArrays(students, students);
