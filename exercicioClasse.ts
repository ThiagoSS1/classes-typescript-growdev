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

class Pessoa {
    public nome: string;
    public idade: number;

    constructor(paramNome: string, paramIdade: number) {
        this.nome = paramNome;
        this.idade = paramIdade;
    }
}

class Aluno extends Pessoa{
   
    public matricula: string;
    public serie: number;
    private notas: Array<number> = [];

    constructor(paramNome1: string, matricula: string, serie:number, paramIdade1:number){
        super(paramNome1, paramIdade1)
        this.matricula = matricula;
        this.serie = serie;
        
    }

    public addNota(nota:number){
        this.notas.push(nota);
    }

    public media():number{
        if (this.notas.length > 0) {
             let soma:number = 0;
        for (const nota of this.notas) {
            soma += nota;
        }
         return soma/this.notas.length
        } else {
            return -1;
        }    
    }
}

class Turma {
    public sala: string;
    public turno: string;
    public alunos: Array<Aluno> = [];
    public responsavel: string;

    constructor(paramSala: string, paramTurno: string, paramResponsavel:string){
        this.sala = paramSala;
        this.turno = paramTurno;
        this.responsavel = paramResponsavel;
    }
    public addAluno(paramAluno: Aluno) {
        this.alunos.push(paramAluno);
    }

    public removeAluno(nomeAluno:String){

    }

    public mediaTurma():number {
        return 1
    }

}

class Professor extends Pessoa{
    public disciplina: string;
    public salario: number;
    public formacao: string;

    constructor(paramNome: string, paramDisciplina: string, paramIdade: number, paramSalario: number, paramFormacao: string){
        super(paramNome, paramIdade)
        this.disciplina = paramDisciplina;
        this.salario = paramSalario;
        this.formacao = paramFormacao;
    }

    public aumentaSalario(valorAumento: number) {
        this.salario += valorAumento;
    }
}

class Escola {

    public nome: string;
    public diretor: string;
    public endereco: string;
    public turmas: Array<Turma> = []
    public professores: Array<Professor> = []
    public mediaEscola: number;

    constructor(paramNome: string, paramDiretor: string, paramEndereco: string){
        this.nome = paramNome;
        this.diretor = paramDiretor;
        this.endereco = paramEndereco;
    }

    public addTurma(paramTurma: Turma){
        this.turmas.push(paramTurma);
    }

    public addProfessor(paramProf: Professor){
        this.professores.push(paramProf);
    }


    // calcularMedia(nomeAluno: string): string {
    //     let alunoTemp: Aluno
        
    //     this.turma.forEach(estudante => {
    //         if(estudante.nome == nomeAluno){
    //             alunoTemp = estudante;
    //         }
    //     });

    //     if(!alunoTemp) return `o aluno ${nomeAluno} nao esta cadastrado`

    //     const media: number = (alunoTemp.nota1 + alunoTemp.nota2 + alunoTemp.nota3) / 3;
    //     if (media >= this.mediaGeral()) {
    //         console.log(`o Aluno ${alunoTemp.nome} esta aprovado`)
    //     } else {
    //         console.log(`o Aluno ${alunoTemp.nome} esta reprovado`)
    //     }

    //     return `O aluno ${alunoTemp.nome} teve a media de ${media}`
    // }

}



let aluno1 = new Aluno ( "Thiago", "000001", 3, 10)
let aluno2 = new Aluno ( "Fabio", "000002", 4, 10)
let aluno3 = new Aluno ( "Alexandre", "000003", 5, 10)

aluno1.addNota(10)
aluno1.addNota(8)
aluno1.addNota(9)

aluno2.addNota(1)
aluno2.addNota(7)
aluno2.addNota(8)

aluno3.addNota(10)
aluno3.addNota(5)
aluno3.addNota(4)

let turma101 = new Turma("101", "Tarde", "Thiago" );

turma101.addAluno(aluno1);
turma101.addAluno(aluno2);
turma101.addAluno(aluno3)

let escola1 = new Escola("Duque", "Lucas", "Rua Princial, 9");

escola1.addTurma(turma101);

let professor1 = new Professor("Guilherme", "Matematica", 40, 1100, "Licenciatura")

escola1.addProfessor(professor1)

console.log(escola1.professores)
