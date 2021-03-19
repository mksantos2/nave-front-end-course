// ################### CHALLENGE 12 ###################

//     ####### PART 1 - SPECIFIC METHODS #######


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



//     ####### PART 2 - REDUCE AND SORT #######


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
]*/

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

