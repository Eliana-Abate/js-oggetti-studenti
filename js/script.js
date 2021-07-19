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

for (var key in student) {
    console.log(key + ': ' + student[key]);
    displayObject.innerHTML = '<li>' + student[key] + '</li>'
}