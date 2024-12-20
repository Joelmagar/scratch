
let count =0
let count2=document.getElementById('count1')
let saved=document.getElementById('save1')
function incrementlap()
{

    count +=   1
count2.innerText=count
  
 }
 function save()
{
    let countstr=count + " - "
    saved.textContent += countstr
    count2.innerText=0
    count =0
}


