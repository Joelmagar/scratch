/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/
let a=" "
let b=" "
let butt_on=document.getElementById('converter')
let user1=document.getElementById('user')
let length_1=document.getElementById('length')
let mass_1=document.getElementById('mass')
let volume_1=document.getElementById('volume')
butt_on.addEventListener("click",function(){
    // console.log("clicked")
    // length_1.textContent=user1.value
    // console.log(user1.value)
    // mass_1.innerHTML="mass"
    // volume_1.innerHTML="volume"
    lengthE1()
    volumeE1()
    massE1()
   
})
function lengthE1(){
   a = user1.value*3.281
   b = user1.value/3.281

 length_1.innerHTML= user1.value+ " meter=" + a + " feet"+ "|| "+ user1.value+" feet ="+ b +" meters"
}
function volumeE1(){
    a = user1.value/0.264 
   b = user1.value*0.264 
   volume_1.innerHTML=user1.value + " gallons=" + a + " litres"+ "|| "+ user1.value+" litres="+ b +" gallons"

}
function  massE1()
{
    a = user1.value*2.204
    b = user1.value/2.204
    mass_1.innerHTML=user1.value + "kg =" + a + " pound"+ "|| "+ user1.value+" pound="+ b +" kg"
}