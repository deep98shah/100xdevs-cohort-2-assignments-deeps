/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const { result } = require("lodash");

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num == 0) {
      throw Error
    }
    this.result /= num;
  }

  clear(num) {
    this.result = 0;
  }

  getResult(num) {
    return this.result;
  }

  calculate(expr) {
    const allowedChars = /[^0-9\+\-\*\/\(\)]/
    const numberReg = /[0-9]/
    expr = expr.replace(/ /g, "")
    console.log(expr)
    if (allowedChars.test(expr)) {
      return Error
    }
    if (!expr.length) {
      return 0
    }
    let operands = []
    let operators = []
    for (let i=0; i<expr.length; i+=1) {
      let ch = expr.charAt(i)
      // console.log(numberReg.test(ch), /[\(]/.test(ch), /[\*\+\-\/]/.test(ch), /[\)]/.test(ch))
      if (numberReg.test(ch)) {
        let num = 0
        while (numberReg.test(ch)) {
          num = num * 10 + parseInt(ch, 10)
          i += 1
          ch = expr.charAt(i)
        }
        i -= 1
        operands.push(num)
      } else if (/[\(]/.test(ch)) {
        operators.push(ch)
      } else if (/[\*\+\-\/]/.test(ch)) {
        operators.push(ch)
      } else if (/[\)]/.test(ch)) {
        let oper2 = parseInt(operands.pop(), 10)
        let oper1 = parseInt(operands.pop(), 10)
        let prev = operators.pop()
        let oper = null
        while (prev != '(') {
          oper = prev
          prev = operators.pop()
        }
        let res = 0
        if (oper == '+') {
          res = oper1 + oper2
        } else if (oper == '-') {
          res = oper1 - oper2
        } else if (oper == '*') {
          res = oper1 * oper2
        } else {
          res = oper1 / oper2
        }
        console.log(oper1, oper2, oper, res)
        operands.push(res)
      }
    }
    if (operands.length > 1) {
      return Error
    }
    return operands[0]
    // console.log(operands)
    return operands
  }
}

let cal = new Calculator()
cal.calculate('((1 + 2) + 3')

module.exports = Calculator;
