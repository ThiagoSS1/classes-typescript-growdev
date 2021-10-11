interface Calc {
    numero1:number;
    numero2:number;
}


class Calculadora {

    add(num: Calc) {
        return  num.numero1 + num.numero2 ;
    }

    subtract(num: Calc) {
        return num.numero1 - num.numero2;
    }

    multiply(num: Calc):number {
        return num.numero1 * num.numero2;
    }
    divide(num: Calc) {
        return num.numero1 / num.numero2;
    }
}

let calc1 = new Calculadora();

let numero: Calc = {
    numero1: 18,
    numero2: 9
}

let resultAdd = calc1.add(numero)
let resultSubt = calc1.subtract(numero)
let resultMult = calc1.multiply(numero)
let resultDiv = calc1.divide(numero)

console.log(resultAdd)
console.log(resultSubt)
console.log(resultMult)
console.log(resultDiv)