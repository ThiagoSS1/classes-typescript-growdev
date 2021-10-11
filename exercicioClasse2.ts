
/* 1 - Crie uma classe TypeScript chamada caixa.

2 - Esta classe vai conter duas propriedades, entradas(array) e saidas(array).

3 - Vamos criar dois métodos, realizarEntrada que vai receber um número e adicionar no array de entradas 
e outro método realizarSaida que vai receber um número e adicionar no array saidas.

4 - Precisamos saber quanto tem no caixa, para isto crie um método que vai somar as entras
 e saidas, depois vai realizar a diferença e retornar o total. */

class Caixa {

   entradas: Array<number> = [];
   saidas: Array<number> = [];


   realizarEntrada(num1: number): number {
      this.entradas.push(num1)
      return num1
   }

   realizarSaida(num2: number): number {
      this.saidas.push(num2)
      return num2
   }

   realizarCalculo(num1: number, num2: number):number {
      return num1 - num2;
   }
}

let caixa = new Caixa();

let entrada = caixa.realizarEntrada(20)
let saida = caixa.realizarSaida(10)

let total = caixa.realizarCalculo(entrada, saida)

console.log(total)
console.log(caixa.entradas)
console.log(caixa.saidas)
