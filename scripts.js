function mathOperator(num1, num2, operate) {
  if (operate === "*") {
    return num1 * num2;
  } else if (operate === "/") {
    if (num2 !== 0) {
      return num1 / num2;
    } else return "ERROR";
  } else if (operate === "+") {
    return num1 + num2;
  } else if (operate === "-") {
    return num1 - num2;
  } else if (operate === "%") {
    return num1 % num2;
  } else {
    return console.log("Wrong operator");
  }
}

// let num1 = parseFloat(prompt("Enter first number :"));
// let num2 = parseFloat(prompt("Enter second number :"));
// let operate = prompt("Enter your operator :");

document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".calculator > div");
  let curInput = "";
  let prevInput = "";
  let operator = "";

  const updateDisplay = (text) => (display.textContent = text ?? "");
  const backSpace = document.querySelector(".backSpace");
  backSpace.addEventListener("click", () => {
  if (curInput !== "") {                                    
    curInput = curInput.slice(0, -1);
    updateDisplay(curInput);
  } else if (prevInput !== "") { 
    prevInput = prevInput.slice(0, -1);
    updateDisplay(prevInput);
    updateDisplay(display.textContent);
  }
});

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent.trim();

      if (!isNaN(value) && value !== "") {
        curInput += value;
        updateDisplay(curInput);
        return;
      }
      if (value === ".") {
        if (!curInput.includes(".")) {
          curInput += ".";
          updateDisplay(curInput);
        }
        return;
      }
      if (["+", "-", "*", "/", "%"].includes(value)) {
        if (curInput !== "") {
          prevInput = curInput;
          curInput = "";
        }
        operator = value;
        return;
      }
      if (value === "=") {
        if (curInput !== "" && prevInput !== "" && operator !== "") {
          const result = mathOperator(
            parseFloat(prevInput),
            parseFloat(curInput),
            operator
          );
          display.textContent = result;
          curInput = result.toString();
          prevInput = "";
          operator = "";
        }
      } else if (value === "AC") {
        curInput = "";
        prevInput = "";
        operator = "";
        updateDisplay("");
        return;
      }
    });
  });
});
