// A simple calculator using two operands
var prompt = require('prompt-sync')({sigint: true})

let operator = prompt("select operator '*', '/', '+', '-'\n") // take input operator
let number1 = parseFloat(prompt('Enter the first number: '))
let number2 = parseFloat(prompt('Enter the second number: '))
let result;
switch(operator){
	case '*':
		result = number1 * number2
		console.log(`${number1} * ${number2} = ${result}`)
		break;

	case '/':
		result = number1 / number2
		console.log(`${number1} / ${number2} = ${result}`)
		break;

	case '+':
		result = number1 + number2
		console.log(`${number1} + ${number2} = ${result}`)

	case '-':
		result = number1 - number2
		console.log(`${number1} - ${number2} = ${result}`)
		break;

	default:
		console.log('invalid operator')
}