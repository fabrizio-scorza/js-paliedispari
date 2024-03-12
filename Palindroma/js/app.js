// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

// chiedo all'utente di inserire tramite prompt una parola e la salvo in una variabile
const word = prompt('inserisci una parola'); //string

// controllo se il risultato della funzione è true o false
    //assegno il risultato della funzione ad una variabile
    const isPalindrome = palindromeFunction(word); //boolean

    // controllo se palindroma
    if (isPalindrome === undefined){
        console.log ('La parola ' + word + ' è troppo corta');
    } else if (isPalindrome === true){
        console.log ('La parola ' + word + ' è palindroma!!');
    } else {
        console.log ('La parola ' + word + ' non è palindroma!!');
    }

// funzione parola palindroma
    function palindromeFunction(string){
        //riassegno a stringa se stessa senza tenere conto dei caratteri maiuscoli
        string = string.toLowerCase();

        // creo una variabile con l'ultimo indice della parola string
        let stringLastIndex = string.length -1; //number

        // dichiaro la variabile che mi servirà per salvare la parola specchiata
        let reverseString =''; //string
        
        //controllo che la parola sia più lunga di un carattere 
        if(string.length > 1){ 
            // inverto la parola in ingresso leggendo ogni lettera da cui è composta e salvandola in una nuova parola 
            for (let i = 0; i < string.length; i++){
                reverseString += string[stringLastIndex]; //string
                stringLastIndex--;
            }

            // ritorno del risultato
            return string === reverseString; //boolean
        } else {
            return undefined;
        }
    }