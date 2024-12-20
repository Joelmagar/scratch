import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

 const appsetting={
    databaseURL :"https://playground-ec367-default-rtdb.asia-southeast1.firebasedatabase.app/"
 }
 const app=initializeApp(appsetting)
 const database=getDatabase(app)
 const shoppinglistdbDB=ref(database,"shopinglist")

let inputE1=document.getElementById('input1') 
let buttonE1=document.getElementById('button1')
let shop=document.getElementById('shoppinglist')
let delete_1=document.getElementById("delete")

buttonE1.addEventListener("click",function()
 {onValue(shoppinglistdbDB, function(snapshot){
  // console.log(snapshot.val())
let object= Object.values(snapshot.val())
shoppinglistdbDB.innerHTML=" "
for(let i=0; i<object.length; i++) {
  console.log(object[i])
listing(object[i])
}
})
  let inputValue=inputE1.value
     push(shoppinglistdbDB, inputValue)
       console.log(inputValue)
       listing(inputValue)
        clear(inputValue) 
 })
 
delete_1.addEventListener('dblclick', function(){
  shop.innerHTML=" "
  console.log('clicked')
})

 function clear()
 {
   inputE1.value=" "
 }
 function listing(){
   shop.innerHTML +=`<li> ${inputE1.value} </li`
 }