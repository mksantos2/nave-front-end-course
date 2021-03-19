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
