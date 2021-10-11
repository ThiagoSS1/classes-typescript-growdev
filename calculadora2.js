var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.add = function (num) {
        return num.numero1 + num.numero2;
    };
    Calculadora.prototype.subtract = function (num) {
        return num.numero1 - num.numero2;
    };
    Calculadora.prototype.multiply = function (num) {
        return num.numero1 * num.numero2;
    };
    Calculadora.prototype.divide = function (num) {
        return num.numero1 / num.numero2;
    };
    return Calculadora;
}());
var calc1 = new Calculadora();
var numero = {
    numero1: 18,
    numero2: 9
};
var resultAdd = calc1.add(numero);
var resultSubt = calc1.subtract(numero);
var resultMult = calc1.multiply(numero);
var resultDiv = calc1.divide(numero);
console.log(resultAdd);
console.log(resultSubt);
console.log(resultMult);
console.log(resultDiv);
