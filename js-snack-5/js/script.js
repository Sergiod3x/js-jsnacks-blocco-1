

var invitati = ["Carlo","Michele", "Paolo", "Guglielmo" ];
var mail = prompt("Inserisci il tuo nome");


// esiste la mail nell'array?

var check = false; // deve diventare true solo se trovo la mail corrispondente.

for (var i = 0; i < invitati.length; i++) {
    if (invitati[i] === mail) {
        check = true;
        break; // esci dal ciclo.
    }
}

if (check) {
    output.innerHTML = 'Puoi entrare alla festa';
} else {
    output.innerHTML = 'Non sei nella lista, non puoi partecipare';
}