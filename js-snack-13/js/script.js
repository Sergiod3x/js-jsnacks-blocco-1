var output=document.getElementById("pre-out");
var conta = 0;
var num = parseInt(prompt("Inserisci un numero in cifre"));

if((num%2)==0){
    conta = num;
}else{
    conta = num+1;
}







output.innerText = conta ;