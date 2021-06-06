var output = document.getElementById('out');
var num= parseInt(prompt("Inserisci il  numero"));

var conta = 0;



for (var i = 1; i <= num; i++) {
    conta = i*i*i;
    output.innerHTML +=  conta + "<br>" ;
    
}


