
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

let num1 = parseFloat(prompt("Enter first number :"));
let num2 = parseFloat(prompt("Enter second number :"));
let operate = prompt("Enter your operator :");


console.log(mathOperator(num1,num2,operate));

document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".calculator > div");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent.trim();

            if (!isNaN(value) && value !== "") {
                display.textContent += value;
                
            }
        });
    });
});
let value = "";
console.log(value);