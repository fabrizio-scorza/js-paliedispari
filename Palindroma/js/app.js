// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

// chiedo all'utente di inserire tramite prompt una parola e la salvo in una variabile
const word = prompt('inserisci una parola'); //string

// controllo se il risultato della funzione è true o false
    //inizializzo una variabile
    let isPalindrome = 0;

    //se lparola è troppo corta lo dice
    if (word.length > 1){
         isPalindrome = palindromeFunction(word); //boolean
    } else { 
        console.log ('La parola ' + word + ' è troppo corta');
    }

    // controllo se palindroma
    if (isPalindrome === true){
        console.log ('La parola ' + word + ' è palindroma!!');
    } else if (isPalindrome === false){
        console.log ('La parola ' + word + ' non è palindroma!!');
    }

// funzione parola palindroma
    function palindromeFunction(string){
        // creo una variabile con l'ultimo indice della parola string
        let stringLastIndex = string.length -1; //number

        // controllo lowercase e spazi
        string = string.toLowerCase(); //string
        string = string.replaceAll(' ',''); //string

        // dichiaro la variabile che mi servirà per salvare la parola specchiata
        let reverseString =''; //string        
        
        // inverto la parola in ingresso leggendo ogni lettera da cui è composta e salvandola in una nuova parola 
        for (let i = 0; i < string.length; i++){   // CORREZIONE  LEZIONE possibilità di inverte le espressioni di controllo (i = string.lenght i>=0 i--)  
            reverseString += string[stringLastIndex]; //string  //CORREZIONE LEZIONE tenendo le condizioni in questo modo: text.at(-1-i)
            stringLastIndex--;
        }

        // ritorno del risultato
        return string === reverseString; //boolean
        
    } 