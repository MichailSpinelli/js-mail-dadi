/*
Mail

Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.


/* Esercizio mail */

const userEmail = prompt ("userEmail");
console.log("usernEmail", userEmail, typeof userEmail);

const validEmails = [
'paolorossi@boolean.it',
'fabiorossi@boolean.it',
'carlorossi@boolean.it',
];

console.log("validEmail", validEmails, typeof validEmails);

let canEnter = false;

for (let i = 0; i < validEmails.length; i++) {
    if (validEmails[i] == userEmail) {

        console.log ('Puoi entrare');

        canEnter = true;

        i = validEmails.length;
    }

}
if (canEnter == false) {
    console.log('non puoi entrare');
}
else {
    
}