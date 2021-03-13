const escola =[
    {
        nome : 'Turma M1',
        alunos: [
            {nome:'Gustavo', nota:8.1},
            {nome:'Ana', nota:9.3}
        ]
    },
    {
        nome : 'Turma M2',
        alunos: [
            {nome:'Rebeca', nota:8.9},
            {nome:'Roberto', nota:7.3}
        ]
    }
]
const getNotaAluno      = aluno => aluno.nota                       //de aluno pego anota
const getNotasDaTurma   = turma =>turma.alunos.map(getNotaAluno)    //de turma eu pego so alunos
const notas1            = escola.map(getNotasDaTurma)               //de escola eu pego as turmas
console.log(notas1)

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([],this.map(callback))
}
const notas2=escola.flatMap(getNotasDaTurma)
console.log(notas2)