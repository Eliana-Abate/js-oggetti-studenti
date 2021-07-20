/*ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.*/

//TODO 1. Creo variabile per descrivere l'oggetto con le sue proprietà
//TODO 2. Creo ciclo FOR-IN per stampare 
//TODO 3. Creo variabile per stampare in pagina

console.log('ESERCIZIO 1');
//! 1. 
var student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 20,
};

console.log(student);



//! 2. 
var displayObject = document.getElementById('es-1');
var text = '';

for (var key in student) {
    console.log(key + ': ' + student[key]);
    text += '<li>' + key + ': ' + student[key] + '</li>';
}

displayObject.innerHTML = text;


console.log('---------------------------------------');

console.log('ESERCIZIO 2');

//! Esercizio 2 ================================================================================================== 

/*ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

//TODO 1. Creo variabile array e descrivo gli oggetti all'interno dell'array
//TODO 2. Creo ciclo FOR per stampare ogni oggetto dell'array
//TODO 3. Creo variabili per chiedere all'utente di inserire le proprietà dei nuovi oggetti studenti
   //! 3.1 - validazione
//TODO 4. Aggiungo oggetto all'array
//TODO 5. Rifaccio ciclo FOR per stampare la lista aggiornata con il nuovo oggetto studente
//TODO 6. Stampo lista aggiornata in Html

//! 1. 
var studentClass = [
    {studentName: 'Luca', studentSurname: 'Verdi'},
    {studentName: 'Maria', studentSurname: 'Bianchi'},
    {studentName: 'Dimitri', studentSurname: 'Rossi'},
    {studentName: 'Gloria', studentSurname: 'Neri'},
];


//! 2. 
var displayStudent = document.getElementById('es-2'); 
var fullName = '';

for (var i = 0; i < studentClass.length; i++) {
    var currentElement = studentClass[i];
    console.log("Stampo nome studente " + currentElement.studentName);
    console.log("Stampo cognome studente " + currentElement.studentSurname);
    fullName += '<li>' + currentElement.studentName  + ' ' + currentElement.studentSurname + '</li>';
}

displayStudent.innerHTML = fullName;


//! 3.
var nameChoice;
var surnameChoice;
var ageChoice;


    //! 3.1 - validazione
    while (!nameChoice || !isNaN(nameChoice) || !nameChoice.trim()) {
        nameChoice = prompt('Inserisci il nome dello studente').trim();
    }

    while (!surnameChoice || !isNaN(surnameChoice) || !surnameChoice.trim()) {
        surnameChoice = prompt('Inserisci il cognome dello studente').trim();
    }

    while (!ageChoice || isNaN(ageChoice)) {
        ageChoice = parseInt(prompt('Inserisci l\'età dello studente'));
    }


var newStudent = {
    studentName: nameChoice,
    studentSurname: surnameChoice,
    studentAge: ageChoice,
};



//! 4.
studentClass.push(newStudent);
console.dir(studentClass);


//! 5. 
var displayNewList = document.getElementById('new-list'); 
var newFullName = '';

for (var i = 0; i < studentClass.length; i++) {
    
    var newCurrentElement = studentClass[i]
    newFullName += '<li>';

    for(var key in newCurrentElement){
        newFullName += newCurrentElement[key]  +  ' ';
    }
    newFullName += '</li>';
}



//! 7.
displayNewList.innerHTML = newFullName;