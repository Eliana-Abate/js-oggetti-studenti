/*ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.*/

//TODO 1. Creo variabile per descrivere l'oggetto con le sue proprietà
//TODO 2. Creo ciclo FOR-IN per stampare 
//TODO 3. Creo variabile per stampare in pagina


//! 1. 
var student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 20,
};



//! 2. 
var displayObject = document.getElementById('es-1');
var text = '';

for (var key in student) {
    console.log(key + ': ' + student[key]);
    text += '<li>' + key + ': ' + student[key] + '</li>';
}

displayObject.innerHTML = text;






//! Esercizio 2 ================================================================================================== 

/*ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

//TODO 1. Creo variabile array e descrivo gli oggetti all'interno dell'array
//TODO 2. Creo ciclo FOR per stampare ogni oggetto dell'array
//TODO 3. Creo funzione per chiedere all'utente di inserire nuovi oggetti studenti
//TODO 4. Aggiungo funzione all'array


//! 1. 
var studentClass = [
    {studentName: 'Luca', studentSurname: 'Verdi'},
    {studentName: 'Maria', studentSurname: 'Bianchi'},
    {studentName: 'Dimitri', studentSurname: 'Rossi'},
    {studentName: 'Gloria', studentSurname: 'Neri'},
];


//! 2. 
for (var i = 0; i < studentClass.length; i++) {
    var currentElement = studentClass[i];
    console.log("Stampo nome studente " + currentElement.studentName);
    console.log("Stampo cognome studente " + currentElement.studentSurname);
}