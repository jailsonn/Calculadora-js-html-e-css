const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

// console.log(buttons)
class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  //add digit to calculator screen
  addDigit(digit) {
    //    check if current operation already has a dot
    if(digit === "." && this.currentOperationText.innerText.includes(".")) {
        return;
    }


    this.currentOperation = digit;
    this.updateScreen();
  }

  //   Change values of the calculartor screen
  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

// os Eventos
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      console.log("Op: " + value);
    }
  });
});
