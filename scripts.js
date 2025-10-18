// document.addEventListener("DOMContentLoaded",() => {

//     const display = document.querySelector(".display");
//     const btn = document.querySelectorAll(".calculator > div");
//     btn.forEach(button => {
//         button.addEventListener("click",() => {
//             const value =button.textContent.trim();
//             display.textContent = value;
//         })
//     })

// }
// )

function mathOperator (num1,num2,operate){
    if(operate === '*'){
        return num1 * num2;
    }
    else if( operate === '/'){
        return num1 / num2;
    }
    else if( operate === '+'){
        return num1 + num2;
    }
    else if( operate === '-'){
        return num1 - num2;
    }
    else if( operate === '%'){
        return num1 % num2;
    }
    else {
        return console.log("Wrong operator")
    }

}

let num1 = prompt("Enter first number :");
let num2 = prompt("Enter second number :");
let operate = prompt("Enter your operator :");


console.log(mathOperator(num1,num2,operate));
