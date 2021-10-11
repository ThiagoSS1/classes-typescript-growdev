class Calculadora {

    add(num1: number, num2: number):number {
        return  num1 + num2;
    }

    subtract(num1: number, num2: number):number {
        return num1 - num2;
    }

    multiply(num1: number, num2: number):number {
        return num1 * num2;
    }
    divide(num1: number, num2: number) {
        return num1 / num2;
    }
}

let calc1 = new Calculadora();

let resultAdd = calc1.add(4,4)
let resultSubt = calc1.subtract(8,4)
let resultMult = calc1.multiply(5,2)
let resultDiv = calc1.divide(8,1)


console.log(`o resultado da adição é ${resultAdd}`)
console.log(`o resultado da subtração é ${resultSubt}`)
console.log(`o resultado da multiplicação é ${resultMult}`)
console.log(`o resultado da divisão é ${resultDiv}`)