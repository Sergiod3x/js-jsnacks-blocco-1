var output=document.getElementById("pre-out");
var conta = 0;
var contaWhile = 0;
var max = 5;
var i = 0;
var num = parseInt(prompt("Inserisci un numero in cifre"));

while((isNaN(num))||(i<max)){
    if(isNaN(num)){
        alert("il numero deve essere costituito di sole cifre ");
    }else{
        contaWhile += num;
        i++;
    }
    
    num = parseInt(prompt("Inserisci un numero in cifre"));   
}

            // FOR

num = parseInt(prompt("Inserisci un numero in cifre per contare con il for"));

for(x = 0; x < max ; x++){
    if(isNaN(num)){
        alert("il numero deve essere costituito di sole cifre ");
        x--;
        num = parseInt (prompt("Inserisci un numero in cifre")); 
    }else{
        conta += num;
        num = parseInt (prompt("Inserisci un numero in cifre"));   
    }    
}




output.innerText = "Conta For  : " +conta + " Conta While : " + contaWhile ;