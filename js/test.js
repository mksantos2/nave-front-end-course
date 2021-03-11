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
    },
]

const newArr = colaboradores.slice().map(colaborador =>{
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

const sortPorCargo = colaboradores.slice().sort((a, b) => (a.name > b.name) ? 1 : -1 )


//const teste = colaboradores.slice().sort((a, b) => (a.cargo > b.cargo) ? 1 : (a.cargo === b.cargo) ? ((a.size > b.size) ? 1 : -1) : -1 )

//console.log(sortPorCargo);



const hashHierarchy = 
  {'estagiario' : 1,
   'front-end'  : 2,
   'back-end'   : 3,
   'designer'   : 4}


console.log(hashHierarchy['estagiario']);




