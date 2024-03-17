// CONSEGNA
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto 
// un messaggio in console con il numero della cella cliccata.

// RAGIONAMENTO HTML
/*
# Creare una griglia per vedere le celle con i numeri da 1 a 100.
# 100 / 10
# <div id="boxes" class="d-flex justify-content-center align-content-center">
    <div class="box"></div>
</div> 
*/

//WRAPPER
const boxWrapper = document.createElement('div');
console.log(boxWrapper);

boxWrapper.className = 'd-flex justify-content-center align-content-center m-auto flex-wrap';
boxWrapper.setAttribute('id', 'boxes');
console.log(boxWrapper);

//VARIABILI

let elBtn = document.querySelector('.btn.btn-outline-dark');
// console.log(elBtn);

let numBox = 100;
console.log(numBox);

let tmpHtml = '';

/* Button function */
elBtn.addEventListener('click', function() {
    let box = document.getElementById('box');
    console.log(box);
    

})
