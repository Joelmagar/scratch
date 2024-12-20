let num1 = Number(prompt("enter the first value"));
let num2 = Number(prompt("enter the second value"));

let result = document.getElementById("save");
document.getElementById("num_1").innerHTML = num1;
document.getElementById("num_2").innerHTML = num2;
function sum() {
  let sum = num1 + num2;
  result.innerText = "sum=" + sum;
}
function sub() {
  let sub = num1 - num2;
  result.innerHTML = "substraction=" + sub;
}
function mul() {
  let mul = num1 * num2;
  result.innerHTML = "multipy=" + mul;
}
function div() {
  let div = num1 / num2;
  result.innerText = " divide=" + div;
}
