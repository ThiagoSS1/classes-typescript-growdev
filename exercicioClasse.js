/*1 - Precisamos criar uma classe chamada escola.
// 2- Esta classe precisa ter um método que retorna a média geral da escola, um número. Você escolhe qual o valor da média.
// 3 - Precisamos criar uma interface(tipo) aluno, que tenha nome, nota1, nota2, nota3.
// 4 - Outro método que precisa ter é calcularMedia que recebe um tipo aluno e retorna uma
    string com a nota e uma mensagem se foi aprovado.
// 5 - Dentro da classe Escola, criar um array de alunos ( que vai ser uma Turma);
// 6 - criar um metodo que adiciona alunos ( dentro da classe Escola);
// 7 - modificar o calcularMedia(), para receber um a string. Receber o nome do aluno,
 buscar no array de alunos e retornar a string com a média.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(paramNome, paramIdade) {
        this.nome = paramNome;
        this.idade = paramIdade;
    }
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(paramNome1, matricula, serie, paramIdade1) {
        var _this = _super.call(this, paramNome1, paramIdade1) || this;
        _this.notas = [];
        _this.matricula = matricula;
        _this.serie = serie;
        return _this;
    }
    Aluno.prototype.addNota = function (nota) {
        this.notas.push(nota);
    };
    Aluno.prototype.media = function () {
        if (this.notas.length > 0) {
            var soma = 0;
            for (var _i = 0, _a = this.notas; _i < _a.length; _i++) {
                var nota = _a[_i];
                soma += nota;
            }
            return soma / this.notas.length;
        }
        else {
            return -1;
        }
    };
    return Aluno;
}(Pessoa));
var Turma = /** @class */ (function () {
    function Turma(paramSala, paramTurno, paramResponsavel) {
        this.alunos = [];
        this.sala = paramSala;
        this.turno = paramTurno;
        this.responsavel = paramResponsavel;
    }
    Turma.prototype.addAluno = function (paramAluno) {
        this.alunos.push(paramAluno);
    };
    Turma.prototype.removeAluno = function (nomeAluno) {
    };
    Turma.prototype.mediaTurma = function () {
        return 1;
    };
    return Turma;
}());
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(paramNome, paramDisciplina, paramIdade, paramSalario, paramFormacao) {
        var _this = _super.call(this, paramNome, paramIdade) || this;
        _this.disciplina = paramDisciplina;
        _this.salario = paramSalario;
        _this.formacao = paramFormacao;
        return _this;
    }
    Professor.prototype.aumentaSalario = function (valorAumento) {
        this.salario += valorAumento;
    };
    return Professor;
}(Pessoa));
var Escola = /** @class */ (function () {
    function Escola(paramNome, paramDiretor, paramEndereco) {
        this.turmas = [];
        this.professores = [];
        this.nome = paramNome;
        this.diretor = paramDiretor;
        this.endereco = paramEndereco;
    }
    Escola.prototype.addTurma = function (paramTurma) {
        this.turmas.push(paramTurma);
    };
    Escola.prototype.addProfessor = function (paramProf) {
        this.professores.push(paramProf);
    };
    return Escola;
}());
var aluno1 = new Aluno("Thiago", "000001", 3, 10);
var aluno2 = new Aluno("Fabio", "000002", 4, 10);
var aluno3 = new Aluno("Alexandre", "000003", 5, 10);
aluno1.addNota(10);
aluno1.addNota(8);
aluno1.addNota(9);
aluno2.addNota(1);
aluno2.addNota(7);
aluno2.addNota(8);
aluno3.addNota(10);
aluno3.addNota(5);
aluno3.addNota(4);
var turma101 = new Turma("101", "Tarde", "Thiago");
turma101.addAluno(aluno1);
turma101.addAluno(aluno2);
turma101.addAluno(aluno3);
var escola1 = new Escola("Duque", "Lucas", "Rua Princial, 9");
escola1.addTurma(turma101);
var professor1 = new Professor("Guilherme", "Matematica", 40, 1100, "Licenciatura");
escola1.addProfessor(professor1);
console.log(escola1.professores);
