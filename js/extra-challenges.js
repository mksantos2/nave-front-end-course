// ======= EXTRA CHALLENGES =======


// extra challenge lesson nº 13

// Array of installments objects
const installments = [
    {
      installment_number: 1,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 2,
      value: 139.88,
      status: 'Pago'
    },
    {
      installment_number: 3,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 4,
      value: 182.37,
      status: 'Aberto'
    },
    {
      installment_number: 5,
      value: 133.93,
      status: 'Aberto'
    }
  ]


// total sum of installments values 
const somaParcelas = installments.reduce((soma, parcela) => { 
  return soma + parcela.value;
}, 0)


// object to simplify the following reduce funtion 
const mapStrings = {
  
  'Aberto' :  'total_open',
  'Pago'   :  'total_paid'

}

// suming the total paid and total open installments values
const totalPagoAberto = installments.reduce((cont, parcela) => {
  cont[mapStrings[parcela.status]] = (cont[mapStrings[parcela.status]]) + parcela.value;
  return cont;
}, {
    'total_paid' : 0,
    'total_open' : 0
   })



// sorting installments by value decreasingly
const sortParcelaDec = installments.slice().sort((parcela1, parcela2) =>{ 
  
  return parcela2.value - parcela1.value;

})


// sorting by higher value and in case of draw: sorting by the installment_number
// using OR, the return is gonna be always the first condition true, in the case (parcela1.value - parcela2.value) turn out false(ie. zero), the (parcela2.installment_number - parcela1.installment_number) is going to be triggered and ordering by this statement.
const sortParcelaCres = installments.slice().sort((parcela1, parcela2) => { 
  return (parcela1.value - parcela2.value) || (parcela2.installment_number - parcela1.installment_number);
})

//TESTING AREA



//EX 1.a
//round the float number
//console.log(somaParcelas.toFixed(2));

//EX 1.b
//console.log(totalPagoAberto);

//EX 1.c
//console.log(sortParcelaDec);

//EX 1.d
console.log(sortParcelaCres);
