var output = document.getElementById('out');
var total = 0;



for (var i = 0; i < 10; i++) {
    total+= parseInt(prompt("Inserisci il "+ (i+1) + " numero"));
}


output.innerHTML =  total ;

