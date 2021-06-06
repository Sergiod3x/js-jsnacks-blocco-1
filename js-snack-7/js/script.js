var output = document.getElementById('out');
// var num= parseInt(prompt("Inserisci il  numero"));
var conta = 1;

output.innerHTML +=  1 + "<br>"
for (var i = 1; i <= 1000; i++) {
    
    conta = conta*2;
    output.innerHTML +=  conta + "<br>" ;
    
}

// Return the value of the number 4 to the power of 3 (4*4*4):
// Math.pow(4, 3);