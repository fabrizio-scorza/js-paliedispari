// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// faccio scegliere all'utente se vuole pari o dispari
    //dichairo la variabile e mi faccio mandare in input la scelta
    let strinChoice = prompt('scegli pari o dispari e digita la scelta').toLowerCase(); //string

    // dichiaro una variabile di controllo per la variabile strinChoice dell'utente
    let choice = false; //boolean

    // controllo la scelta dell'utente per capire se ha scelto pari o dispari controllando che vengano inseriti solo pari o dispari
    do {
        if (strinChoice === 'pari'){
            choice = true
        }
}
// faccioscegliere all'utente un numero da 1 a 5 

// assegno il riusltato della funzione numero random ad una variabile 
const computerNum = randomNum();

//sommo i due numeri e stabilisco se la somma è pari o dispari

//decreto il vincitore

//funzione numero random 
function randomNum (){
    //dichiaro una variabile che conterrà il numero random generato
    const oneToFive = Math.floor(Math.random()* 5 + 1); //number

    //ritorna un numero random da 1 a 5
    return oneToFive;
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