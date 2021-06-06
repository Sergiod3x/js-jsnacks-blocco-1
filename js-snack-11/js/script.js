var output=document.getElementById("pre-out");
var max = 10;
var conta = 0;
var media = 0;


for (var i = 1; i <=max; i++) {
    conta += i;
 
}

media = conta/max;

output.innerText = "La somma dei primi dieci numeri è : " + conta  + " La media dei primi dieci numeri è " + media ;







