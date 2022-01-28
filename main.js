
function checkWord (writeWord) {

    //variabile che conterrà la parola che scorro in avanti
    let normalWord = "";


    //scorro in avanti l'indice della parola e la inserisco nella variabile normalWord
    for (let i = 0; i < writeWord.length; i++) {

        normalWord += writeWord[i];

    }

    //variabile che conterrà la parola invertita
    let reverseWord = "";

    //scorro indietro l'indice della parola e la inserisco nella variabile reverseWord
    for (let i = writeWord.length - 1; i >= 0; i--) {

        reverseWord += writeWord[i];

    }

    let result = "";

    //se la parola non invertita è uguale alla parola invertita
    if (normalWord === reverseWord) {

        result = alert('La parola inserita è palindroma!');

    } else {

        result = alert('La parola inserita NON è palindroma');
        
    }

    return result;

}

//l'utente inserisce la parola da controllare
let insertWord = prompt('Inserisci una parola e verifica se è palindroma!');

//passo il valore del prompt come argomento della funzione
checkWord(insertWord);