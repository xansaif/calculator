let display = document.querySelector(".exp")
let zero = document.querySelector("#zero")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let multi = document.querySelector("#multiply")
let divide = document.querySelector("#divide")
let clear = document.querySelector("#clear")
let back = document.querySelector("#back")
let power = document.querySelector("#power")
let equal = document.querySelector("#equal")

console.log("working")
zero.addEventListener("click",()=>
{
    display.textContent = "0"
    console.log(0)
})
one.addEventListener("click",()=>{
    appendToInput(1)
})
two.addEventListener("click",()=>{appendToInput(2)})
three.addEventListener("click",()=>{appendToInput(3)})
four.addEventListener("click",()=>{appendToInput(4)})
five.addEventListener("click",()=>{appendToInput(5)})
six.addEventListener("click",()=>{appendToInput(6)})
seven.addEventListener("click",()=>{appendToInput(7)})
eight.addEventListener("click",()=>{appendToInput(8)})
nine.addEventListener("click",()=>{appendToInput(9)})
plus.addEventListener("click",()=>{appendToInput("+")})
minus.addEventListener("click",()=>{appendToInput("-")})
divide.addEventListener("click",()=>{appendToInput("/")})
multi.addEventListener("click",()=>{appendToInput("*")})
back.addEventListener("click",()=>{
    const currentValue = display.value;

  if (currentValue.length > 0) {
    const newValue = currentValue.slice(0, -1);
    display.value = newValue; 
  }
}
)
clear.addEventListener("click",()=>{display.value = ""})
equal.addEventListener("click",()=>
{
    let exp = display.value;
    let expval = exp.split(/([+\-*/^()])/).filter(token => token.trim() !== "")
    let res = calculateArray(expval)
    console.log(expval)
    console.log(res)
    display.value = res
})


function oprate (num,num2,oprater)
{
    let anwser = 0;
    if (oprater === "+")
    {
        anwser = num + num2;
    }
    if (oprater === "-")
    {
        anwser = num - num2
    }
    if (oprater === "*")
    {
        anwser = num * num2
    }
    if (oprater === "/")
    {
        if (num2 == 0)
        {
            anwser = "undifined"
        }
        else anwser = num / num2
    }
    return anwser
}



function calculateArray(arr) {
    if (arr.length < 3 || arr.length % 2 === 0) {
        return "Invalid input";
    }

    let result = parseFloat(arr[0]); // Initialize with the first number

    for (let i = 1; i < arr.length; i += 2) {
        const operator = arr[i];
        const nextNumber = parseFloat(arr[i + 1]);

        if (isNaN(nextNumber)) {
            return "Invalid input"; // Check for invalid numbers
        }

        result = oprate(result, nextNumber, operator);
    }

    return result;
}

function appendToInput(value) {
  //const input = document.getElementById("textInput");
  display.value += value;
}

console.log(oprate(1,2,"+"))