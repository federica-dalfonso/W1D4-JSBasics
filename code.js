/*1 - Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere ad un bambino.
Inserisci la spiegazione in un commento in cima al tuo file*/

/*I dati sono come gli ingredienti della nostra ricetta per cucinare i biscotti: ce ne sono di diverse tipologie, che si differenziano appunto
per il "tipo" di dato che rappresentano (NB: anche se JavaScript rientra tra i linguaggi "non tipizzati", dunque non pone attenzione restrittiva
alla dichiarazione della tipologia di dato). 
I datatype cosiddetti "primitivi" sono quei dati "semplici", pienamente rappresentati dal loro valore; sono sei: 
- number (valore numerico, sia esso int o float); 
- string (sequenze di caratteri delimitate da doppi apici o singoli apici);
- booleani (ovvero entità logiche, Vero o Falso);
- undefined (un valore che non è stato ancora assegnato alla variabile);
- null (un valore "vuoto", divero però da 0)*/

//2- Scrivi il codice necessario ad effettuare un'addizione dei numeri 12 e 20 e salva il risultato in una variabile.
let firstNumber = 12;
let secondNumber = 20;
let myResult = firstNumber + secondNumber;

console.log (myResult);

//3- Crea una variabile di nome "x" e assegna ad essa il numero 12.
let xVariable = 12;

//4- Crea una variabile chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
let varName = "Federica";

//5- Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata (in es.3)
let subtractionVar = 4 - xVariable;

console.log (subtractionVar); 

//6- Crea un oggetto di JavaScript che ti rappresenti (nome, cognome e hobby)
let myIdentityCard = {
    name: "Federica",
    surname: "D'Alfonso",
    hobby: "play the guitar"
};

/* 7- Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john" e assegna a name2 la stringa "John".
Verifica che name1 sia diversa da name2. Infine verifica che la loro uguaglianza diventi true se entrambe vengono trasformate
in lowercase (senza cambiare il valore di name2!) */
let var1 = "john";
let var2 = "John"; 

console.log (var1 == var2);
console.log (var1 === var2);
//oppure
console.log (var1 !== var2);

console.log (var1.toLowerCase() == var2.toLowerCase ()); 
