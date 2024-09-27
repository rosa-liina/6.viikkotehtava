// Valitse painike, taulukko ja p-elementin span, jossa näytetään rivien määrä
const button = document.querySelector('button');
const table = document.querySelector('table');
const rowCountDisplay = document.querySelector('#rowCount');

// Muuttuja, joka pitää kirjaa arvottujen jokeririvien määrästä
let rowCount = 0;

// Funktio, joka lisää uuden rivin taulukkoon
function addRow() {
    const newRow = table.insertRow(); // Luo uusi rivi taulukkoon

    // Toistolause, joka suoritetaan 7 kertaa (lisätään 7 saraketta)
    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell(); // Luo uusi solu riville
        const randomNumber = Math.floor(Math.random() * 10); // Satunnaisluku 0-9
        newCell.innerHTML = randomNumber; // Asetetaan satunnaisluku soluun
    }

    // Päivitetään rivien määrä
    rowCount++;
    rowCountDisplay.textContent = rowCount; // Näytetään päivitetty määrä p-elementissä
}

// Lisää tapahtumankuuntelija painikkeelle
button.addEventListener('click', addRow);
