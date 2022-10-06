const init = () => {
  let totalCost = 0;

[...document.querySelectorAll('.button')].forEach((buttonItem) => {
totalCost += buttonItem.querySelector('.input').value * buttonItem.querySelector('.input').dataset.price;

});

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}

clear() {
}

delete() {
}

appendNumber(number) {
}

chooseOperation(operation) {
}

compute() {
}




numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })

})

appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
}

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

chooseOperation(operation) {
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
    this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
}