let count = 0
let count2= 0
let count3=document.getElementById('score3')
let save1=document.getElementById('score1')
let save2=document.getElementById('score2')
function one1(){
    count += 1
    save1.innerText= count 
    console.log("button clicked")
}
function one2(){
    count += 2
    save1.innerHTML=count
    console.log("botton clicked")
}
function one3(){
    count +=3
    save1.innerText= count 
    console.log("botton clicked")
}
function two1(){
    count2 +=1
    save2.innerText= count2 
    console.log("botton clicked")
}
function two2(){
  count2 +=2
  save2.innerText= count2
    console.log("botton clicked")
}function two3(){
    count2+=3
    save2.innerText= count2
    console.log("botton clicked")
}
function refresh()
{
count3.innerText=count + ":" + count2
count = 0
save1.innerHTML=count
count2=0
save2.innerHTML=count2
    console.log("botton clicked")
}