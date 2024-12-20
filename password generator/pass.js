const ranpass=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let pass1=document.getElementById("pass")
let length=12
function click1(){ 
    
             let passe1=Math.floor(Math.random()*ranpass.length)
             let passe2=Math.floor(Math.random()*ranpass.length)
             let passe3=Math.floor(Math.random()*ranpass.length)
             let passe4=Math.floor(Math.random()*ranpass.length)
             let passe5=Math.floor(Math.random()*ranpass.length)
             let passe6=Math.floor(Math.random()*ranpass.length)
             let passe7=Math.floor(Math.random()*ranpass.length)
             let passe8=Math.floor(Math.random()*ranpass.length)
             let passe9=Math.floor(Math.random()*ranpass.length)
             let passe10=Math.floor(Math.random()*ranpass.length)
             let passe11=Math.floor(Math.random()*ranpass.length)
    
    pass1.textContent =ranpass[passe1] +ranpass[passe2]+ranpass[passe3]+
    ranpass[passe4]+ranpass[passe5]+ranpass[passe6]+ranpass[passe7]+ranpass[passe8]+ranpass[passe9]+ranpass[passe10]+ranpass[passe11]
}
