
var num1 = prompt("Inserisci il  primo numero");
var num2 = prompt("inserisci il secondo numero");
var output = document.getElementById('out');

if(num1>num2){
    var winner = num1;
} else {
    if(num1<num2){
        var winner = num2;
    } else {
        var winner = "nessuno! Parità: "+num1;
    }
}

output.innerHTML = "Il valore massimo è : " + winner ;

