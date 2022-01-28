
//L'utente sceglie tra Pari o Dispari
let sceltaUser = prompt('Scegli "Pari" o "Dispari" ');

//L'utente sceglie un numero tra 1 e 5
let numeroUser = parseInt(prompt('Inserisci un numero da 1 a 5'));

//genero un numero randomico a partire da 1
function numbPc (numMax) {

    let randomNumb = Math.floor((Math.random() * numMax ) + 1);

    return randomNumb;
}

//dico alla funzione di generare un numero con valore massimo 5
let numRandomPc = numbPc(5);


console.log('il num random è: ' + numRandomPc);

//faccio la somma tra due numeri e verifico che il risultato sia pari
function tipoNumber (numb1, numb2) {

  let sommaNumbArg = numb1 + numb2;
  console.log('La somma dei due numeri è: ' + sommaNumbArg)

  let resultTipo = "";

  if (sommaNumbArg % 2 == 0) {
  
    resultTipo = "Pari";

  } else {
  
    resultTipo = "Dispari";
  }

  console.log('Il tipo è ' + resultTipo);
  return resultTipo;

}

/*dico alla funzione che il il primo argomento è il numero inserito dall'utente 
  e il secondo è quello generato in maniera randomica.*/
let funcTipoNumb = tipoNumber(numeroUser, numRandomPc);


//se il numero inserito dall'utente ha lo stesso valore ritornato dalla funzione faccio l'alert 'Hai vinto'
if (sceltaUser === funcTipoNumb) {

    alert('Hai vinto');

} else {

  alert ('Hai perso');

}