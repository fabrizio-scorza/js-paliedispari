// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// faccio scegliere all'utente se vuole pari o dispari
    //inizializzo la variabile string Choice
    let stringChoice =''; //string

    // dichiaro una variabile di controllo per la variabile strinChoice dell'utente
    let choice = false; //boolean

    // controllo la scelta dell'utente per capire se ha scelto pari o dispari controllando che vengano inseriti solo pari o dispari come valori della stringa
    do {        
        stringChoice = prompt('scegli pari o dispari e digita la scelta') //string
        if (stringChoice === 'pari'){
            choice = true
        }
    } while ((stringChoice !== 'pari' && stringChoice !== 'dispari'));

// faccio scegliere all'utente un numero da 1 a 5 
    // inizializzo una variabile numero dell'utente 
    let userNum = 0; //number

    //richiedo all'utente un numero finché non mi inserisce un numero valido (compreso tra 1 e 5)
    do {
        userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));
    } while (!(userNum > 0 && userNum <=5));

// assegno il riusltato della funzione numero random ad una variabile 
const computerNum = randomNum(1,5); //number

//sommo i due numeri e stabilisco se la somma è pari o dispari
const summ = (computerNum + userNum); //number

const theSummIsEven = isEven(summ); //boolean
//decreto il vincitore
console.log ('Il numero del Computer è: ' + computerNum + '.' + ' Il tuo numero è: ' + userNum +'.');

if (theSummIsEven === true){
    console.log(summ + ' è PARI.');
} else {
    console.log(summ + ' è DISPARI.');
}
if(choice === true){
    console.log('Hai scelto pari');
} else {
    console.log('Hai scelto dispari');
}
//se la scelta dell'utente corrisponde al risultato allora il giocatore ha vinto alrimenti ha perso
if(theSummIsEven === choice){        
    console.log ('HAI VINTO')
} else {
    console.log ('HAI PERSO');
    }


    

//funzione numero random 
function randomNum (min,max){
    //dichiaro una variabile che conterrà il numero random generato
    const rangeRandom = Math.floor(Math.random()* (max - min + 1) + min); //number

    //ritorna un numero random da 1 a 5
    return rangeRandom;
}

//funzione pari o dispari
function isEven (num){
    // dichiaro una variabile resto che mi servirà per il controllo del numero
    const rest = num % 2; //number

    //// la versione estesa del return sarebbe :
    // let oddOrEven = false; //boolean
    // if (rest === 0){
        // oddOrEven = true; 
    //}
    // return oddOrEven;

    //ritorno un booleano true in caso sia divisibile per due e quindi pari false in caso contrario
    return rest === 0 ;
}