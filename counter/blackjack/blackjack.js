
 let cards=[]
let sum = 0
let black=false
let isalive=false
let player={
    name : "player",
    chips: 145
}
let playerN=document.getElementById('playerl')
let message=""
let sum1=document.getElementById('sum')
let message1=document.getElementById('message')
let card1=document.getElementById('card')

//let message1=document.querySelector('#message')
function strt(){
isalive=true
    let num1=getRandomCards()
    let num2=getRandomCards()
    cards=[num1,num2]
    sum = num1 + num2
   sum1.innerHTML="SUM:" + " " +sum
   render()
     
//    console.log(message)
}
function getRandomCards(){
    let randomnum=Math.floor( Math.random()*13)+1
    if(randomnum>10)
        {
        return 10
    }
    else if (randomnum===1) 
        {
            return 11
        
    } 
    else {
        return randomnum
    }
}
function render()
{
 card1.innerHTML=("CARDS: ")
    for (let i=0 ; i< cards.length ; i++)
        {
            card1.innerHTML += cards[i] + " "
        } 
       if(sum<21)
    {
        message="Do you want to draw a new card?"
    }
    else if( sum===21)
        {
            message="You got blackjack" 
            black=true
            playerN.innerHTML=player.name + ":$ " + "145"
        }
        else{
            message="You are out"
            isalive=false
            playerN.innerHTML=player.name + ":$ " + "0"
        }
    message1.innerHTML=message
}
function conti()
{ 
    if(black=== false && isalive === true){
        let num3=getRandomCards()
        sum += num3
        cards.push(num3)
        sum1.innerHTML="sum:" + sum
        render()
    }
    message1.innerHTML=message
    
}
 
function newgame() 
{
   
    sum1.innerHTML= "SUM:"
message1.innerHTML="Wanna play again?"
card1.innerHTML="CARDS: " + " "
sum1.innerHTML="sum: "+0
playerN.innerHTML="Player price"

}