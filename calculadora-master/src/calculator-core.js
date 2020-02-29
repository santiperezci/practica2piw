

export function evaluate(arrFormula) {
const arrayDatos = infix2Postfix(arrFormula);
return evaluatePostfix(arrayDatos);

}

export function isNotNumber(input) {
  return input === '(' || input === ')' || input === '+' || input === '-' || input === '*'|| input === 'C'|| input === "sin"||
  input === "cos"|| input === "tan";
}

export function isNumber(input) {
  return !isNotNumber(input);
}

export function isOperator(input) {
  return input === '+' || input === '-' || input === '*' || input === '/'|| input === "sin"||
   input === "cos"|| input === "tan" ;
}

export function getPriority(input) {
  if (input === '+' || input === '-') return 1;
  else if (input === '*' || input === '/'|| input === "sin"||
  input === "cos"|| input === "tan") return 2;
  return 0;   
}

export function infix2Postfix(arrFormula) {
  let result = [], stack = [];

  arrFormula.forEach(item => {
    if (isNumber(item)) {
      result.push(item);
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (stack.length > 0) {
        const pulledItem = stack.pop();

        if (pulledItem === '(') break;
        else result.push(pulledItem);
      }
    } else if (isOperator(item)) {
      while (stack.length > 0) {
        const peekedItem = stack[stack.length - 1];

        if (isOperator(peekedItem) && getPriority(peekedItem) >= getPriority(item)) {
          result.push(peekedItem);
          stack.pop();
        } else break;
      }

      stack.push(item);
    } 
  });

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
}




export function evaluatePostfix(arrayDatos) {
  let stack = [];

  arrayDatos.forEach(item => {
    if (isNumber(item)) {
      stack.push(item);
    } else if (isOperator(item)) {
      const num1 = Number.parseFloat(stack.pop()), num2 = Number.parseFloat(stack.pop());
      let result = '';

      switch (item) {
        case '+':
          result = num2 + num1;
          break;
        case '-':
          result = num2 - num1;
          break;
        case '*':
          result = num2 * num1;
          break;
        case '/':
          result = num2 / num1;
          break;
        
        case "sin":
          result = Math.sin(num1);

          break;  
        case "cos":
          result = Math.acos(num1);
          break;  
        case "tan":
          result = Math.tan(num1);;
          break;
 
      }

      stack.push(result + '');

    }
  });

  return Number.parseFloat(stack[0]);
}

