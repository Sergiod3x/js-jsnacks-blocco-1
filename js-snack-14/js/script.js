var output=document.getElementById("pre-out");
var pName = ["Carlo","Michele", "Paolo", "Guglielmo", "Sergio", "Sabrina", "Selene", "Gustavo", "Lara", "Roberto" ];
var pSurname = ["Rossi","Bianchi", "Vacchi", "Pintus", "Piras", "Nieddu", "Neri", "Rosa", "Carta", "Martini" ];
var numName = pName.length;
var numSurname = pSurname.length;


do{
    var a1 = Math.floor(Math.random()*numName);
    var b1 = Math.floor(Math.random()*numSurname);
    var a2 = Math.floor(Math.random()*numName);
    var b2 = Math.floor(Math.random()*numSurname);
    var a3 = Math.floor(Math.random()*numName);
    var b3 = Math.floor(Math.random()*numSurname); 
}
while(((a1==a2)&&(b1==b2))||((a1==a3)&&(b1==b3))||((a2==a3)&&(b2==b3))){
    a1 = Math.floor(Math.random()*numName);
    b1 = Math.floor(Math.random()*numSurname);
    a2 = Math.floor(Math.random()*numName);
    b2 = Math.floor(Math.random()*numSurname);
    a3 = Math.floor(Math.random()*numName);
    b3 = Math.floor(Math.random()*numSurname);
}





 output.innerHTML = "Gli invitati sono: <br>" + pName[a1]+" "+pSurname[b1] + "<br>"  + pName[a2]+" "+pSurname[b2] + "<br>"  + pName[a3]+" "+pSurname[b3];
