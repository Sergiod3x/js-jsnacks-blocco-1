var output=document.getElementById("pre-out");
var num = prompt("Inserisci un numero di 4 cifre");
var conta = 0;


while((num.length!=4)||(isNaN(num))){
    alert("il numero deve essere costituito di soli caratteri e deve essere composto da 4 cifre");
    num = prompt("Inserisci un numero di 4 cifre");   
}


for (var i = 0; i <4; i++) {
    conta += parseInt (num[i]);
 
}

output.innerText = conta;







