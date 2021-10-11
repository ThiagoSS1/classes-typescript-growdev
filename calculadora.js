var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculadora.prototype.subtract = function (num1, num2) {
        return num1 - num2;
    };
    Calculadora.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Calculadora.prototype.divide = function (num1, num2) {
        return num1 / num2;
    };
    return Calculadora;
}());
var calc1 = new Calculadora();
var resultAdd = calc1.add(4, 4);
var resultSubt = calc1.subtract(8, 4);
var resultMult = calc1.multiply(5, 2);
var resultDiv = calc1.divide(8, 1);
console.log("o resultado da adi\u00E7\u00E3o \u00E9 " + resultAdd);
console.log("o resultado da subtra\u00E7\u00E3o \u00E9 " + resultSubt);
console.log("o resultado da multiplica\u00E7\u00E3o \u00E9 " + resultMult);
console.log("o resultado da divis\u00E3o \u00E9 " + resultDiv);
