// La tombola magica

/* Scrivi un programma che dato:
- un array di 10 elementi di numeri casuali interi(compresi tra 1 e 90 senza ripetizioni),
    - un array di 10 numeri interi a tuo piacimento(compresi tra 1 e 90 senza ripetizioni)
Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
2 numeri uguali => ambo
3 numeri uguali => terna
4 numeri uguali => quaterna
5 numeri uguali => cinquina
tutti i numeri uguali => tombola
In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!". */

let myArray = [12, 22, 45, 7, 59, 84, 10, 23, 76, 34];
let randomArray = [];

for (i = 0; randomArray.length < 10; i++) { //randomArray.length < 10 = fino a quando random array non arriva a 10
    let numRandom = Math.floor(Math.random() * (90)) + 1;
    if (!randomArray.includes(numRandom)) {
        randomArray.push(numRandom);
    }
}
console.log(randomArray);
console.log(myArray);


/************************************************
 *  CREO UN NUOVO ARRAY CON I NUMERI UGUALI PER POTER CONTROLLARE IL RISULTATO */

let newArray = myArray.filter(element => randomArray.includes(element));
console.log(newArray); //resituisce un nuovo array con i numeri uguali

let mex = 'Hai fatto ';
switch (newArray.length) { //in base alla lunghezza dell'array trovi quanti numeri sono uguali o meno
    case 2:
        mex += 'ambo'
        break;
    case 3:
        mex += 'terna'
        break;
    case 4:
        mex += 'quaterna'
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        mex += 'cinquina'
        break;
    case 10:
        mex += 'tombola'
        break;

    default:
        mex = "Mi dispiace, hai perso!"
        break;
}
console.log(mex);

/*******************************************************************
 ***************************************** stampa a schermo */
document.getElementById('result').innerHTML = mex;
document.getElementById('my_num').innerHTML = 'I tuoi numeri: ' + myArray.join(' , ')
document.getElementById('cpu_num').innerHTML = 'I numeri del Cpu: ' + randomArray.join(' , ')
document.getElementById('num').innerHTML = 'I numeri Indovinati: ' + newArray.join(' , ')
