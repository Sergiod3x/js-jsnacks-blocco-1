var maxSpesa = 10;
var lista=[""];
var listaSpesaDivs=document.getElementsByClassName("lista-spesa");//tutti i div con quella classe
var listaSpesaOutput = listaSpesaDivs[0];//solo il div ennesimo
var listaText = "";

for(var i = 0; i < maxSpesa; i++){
    lista[i]= prompt("Inserisci il  prodotto");
    listaText += "<li>"+ lista[i] + "</li>";
}



listaSpesaOutput.innerHTML = listaText;



// listaSpesaOutput.innerText = salutaPenny + "\n";




// while(i < 10){
//     lista[i]= prompt("Inserisci il  prodotto");
//     listaText += "<li>"+ lista[i] + "</li>";
//     i++;
// }


// var output = document.getElementById('out');
// // var num= parseInt(prompt("Inserisci il  numero"));
// var conta = 1;

// output.innerHTML +=  1 + "<br>"
// for (var i = 1; i <= 1000; i++) {
    
//     conta = conta*2;
//     output.innerHTML +=  conta + "<br>" ;
    
// }

// // Return the value of the number 4 to the power of 3 (4*4*4):
// // Math.pow(4, 3);