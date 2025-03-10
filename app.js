// let num = 42 // number 
// let firstName = 'Abdulloh' // string
// const isProgrammer = true // booleans

/* Can Do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' //no
let myNum = 34 //Yes
let num42 = 10
*/

/* Restricted
let 42num = '11'
let my-num = 1
let const
*/

// firstName = 'Max' // Yes
// isProgrammer = false //error

// alert(firstName)
// console.log('test:', num, isProgrammer, firstName)

/*console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
console.log(num)*/

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1)
// console.log(num3)

// const fullName = firstName + ' Ayubzoda'
// const fullName = firstName + ' ' + 'Ayubzoda'

const resultElement = document.getElementById('result')
const inputl1 = document.getElementById('input1')
const inputl2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const cubeBtn = document.getElementById('cube')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = (42 - 2) / num

// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}
multiplicationBtn.onclick = function () {
    action = '*'
}
divisionBtn.onclick = function () {
    action = '/'
}
cubeBtn.onclick = function () {
    action = '^'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
} 

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (action == '+') {
        return num1 + num2
    } else if (action == '-') {
        return num1 - num2 
    } else if (action == '*') {
        return num1 * num2 
    } else if (action == '/') {
        return num1 / num2
    } else if (action == '^') {
        return num1 ** num2
    }
    
    //return actionSymbol == '+' ? num1 + num2 : num1 - num2 //: num1 * num2 : num1 / num2
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(inputl1, inputl2, action)
    printResult(result)

    // if (action == '+') { 
    //     const sum  = Number(inputl1.value) + Number(inputl2.value)
    //     printResult(sum)
    // } else if (action == '-') { 
    //     const sum  = Number(inputl1.value) - Number(inputl2.value)
    //     printResult(sum)
    // } else if (action == '*') { 
    //     const sum  = Number(inputl1.value) * Number(inputl2.value)
    //     printResult(sum)
    // } else if (action == '/') { 
    //     const sum  = Number(inputl1.value) / Number(inputl2.value)
    //     printResult(sum)
    // }

}
