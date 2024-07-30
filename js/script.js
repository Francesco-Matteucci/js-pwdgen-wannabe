console.log('JS ok')


// Recupero elemento interessato dal DOM
// Creazione di due alert di anticipazione alla pagina
// Chiedere all'utente il suo nome (tramite promt)
// Chiedere all'utente il suo cognome (tramite promt)
// Chiedere all'utente il suo colore preferito (tramite promt)
// Stampa su console il risultato, senza spazi, mettendo un 21 alla fine



//! FASE PREPARATORIA
//? cosa posso prepararmi da solo all'inizio?
// Recupero elemento interessato dal DOM
const resultElement = document.getElementById('result');
console.log('resultElement');

// Creazione di due alert di anticipazione alla pagina
window.alert("Benvenuto in 'CreaLaTuaSuperPassword.exe'!");
window.alert("Ti chiederò qualche informazione per poter generare una password incredibile!");

//! FASE RACCOLTA DATI
// Chiedere all'utente il suo nome (tramite promt)
const firstName = prompt('Per favore, dimmi il tuo nome!', 'Fra');
console.log(firstName);

// Chiedere all'utente il suo cognome (tramite promt)
const lastName = prompt('..e adesso il tuo cognome!', 'Emme');
console.log(lastName);

// Chiedere all'utente il suo colore preferito (tramite promt)
const favColor = prompt('Benissimo! Ed ora.. il tuo colore preferito!', 'Verde');
console.log(favColor);


//! FASE DI ELABORAZIONE
// Creazione di un alert di creazione password
window.alert("Perfetto, e adesso goditi la tua password inespugnabile (!!)");

// Stampa su console il risultato, senza spazi, mettendo un 21 alla fine
const allInfo = firstName + lastName + favColor + '21'
console.log(allInfo);


//!FASE DI OUTPUT
//output
resultElement.innerHTML = `<strong>${allInfo}</strong>`;



// // --------------------------------V2---------------------------------------------------------


// const maxHeight = document.querySelector(".funny-content").clientHeight;
// const maxWidth = document.querySelector(".funny-content").clientWidth;

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * ((max - 120) - min + 20) + min)
// }

// document.querySelector("#no").addEventListener("click", () => {

//     document.querySelector(".gif").src = "https://media.tenor.com/jsQumF2np4kAAAAC/bear-shocked.gif";

//     document.querySelector("h2").innerHTML = "COSAAAA, by the way.. im the best!";

// })

// document.querySelector("#yes").addEventListener("click", () => {

//     document.querySelector(".gif").src = "https://media.tenor.com/KFkmX5T_5LEAAAAC/love-you-brown-bear.gif";
//     document.querySelector("h2").innerHTML = "Yayyy!";

// })

// const noBtn = document.querySelector("#no");
// noBtn.addEventListener("mouseover", () => {


//     noBtn.style.setProperty("--x", `${getRandomNumber(-maxWidth / 2 + 60, maxWidth / 2 - 60)}px`);
//     noBtn.style.setProperty("--y", `${getRandomNumber(-maxWidth / 2 + 60, maxHeight / 2 - 60)}px`);

// }

// );