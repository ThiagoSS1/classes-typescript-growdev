/* 1 - Crie uma classe TypeScript chamada caixa.

2 - Esta classe vai conter duas propriedades, entradas(array) e saidas(array).

3 - Vamos criar dois métodos, realizarEntrada que vai receber um número e adicionar no array de entradas
e outro método realizarSaida que vai receber um número e adicionar no array saidas.

4 - Precisamos saber quanto tem no caixa, para isto crie um método que vai somar as entras
 e saidas, depois vai realizar a diferença e retornar o total. */
var Caixa = /** @class */ (function () {
    function Caixa() {
        this.entradas = [];
        this.saidas = [];
    }
    Caixa.prototype.realizarEntrada = function (num1) {
        this.entradas.push(num1);
        return num1;
    };
    Caixa.prototype.realizarSaida = function (num2) {
        this.saidas.push(num2);
        return num2;
    };
    Caixa.prototype.realizarCalculo = function (num1, num2) {
        return num1 - num2;
    };
    return Caixa;
}());
var caixa = new Caixa();
var entrada = caixa.realizarEntrada(20);
var saida = caixa.realizarSaida(10);
var total = caixa.realizarCalculo(entrada, saida);
console.log(total);
console.log(caixa.entradas);
console.log(caixa.saidas);
