let expression = '';

function appendNumber(num) {
  expression += num;
  document.getElementById('display').value = expression;
}

function appendOperator(operator) {
  if (expression !== '' && '+-*/'.indexOf(expression[expression.length - 1]) === -1) {
    expression += operator;
    document.getElementById('display').value = expression;
  }
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  if (expression !== '') {
    let result = eval(expression);
    document.getElementById('display').value = result;
    expression = '';
  }
}
