
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢",
 "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
 let ok1=document.getElementById('ok')
function fight()
{
        let emj=Math.floor(Math.random()*fighters.length)
        let emj1=Math.floor(Math.random()*fighters.length)
        ok1.textContent=fighters[emj] + " vs"+fighters[emj1]
}