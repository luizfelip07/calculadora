let expression = '';

function appendNumber(Number);
  expression += Number;
  document.getElementById('result').value = expression;
}

function appendNumber(operator) {
    expression += operator;
    document.getElementById('result').vale= expression;
  }

function calculate(){
   try{
       const result = eval(expression);
       document.getElementById('result').value = result;
       expression = '';
 } catch (error) {
 document.getElementById('result').value = 'Error';
 expression = '';
 }
}
       function clear(): void
function clear() {
  expression = '';
  document.getElementById('result').value = '';
}
