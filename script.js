function inserirNome(){
let nomeUsuario = prompt ("Qual o seu  nome?");
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario
}

inserirNome();

//Lista de linguagens escritas

let linguagens = ["JavaScript", "Python", "C"];

console.log(linguagens[0]); //JavaScript
console.log(linguagens[1]); //Python
console.log(linguagens[2]); //C

const lista = document.querySelector("#lista");
lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 = {
    nome: "Caroline",
    idade: 46,
    anoLetivo: "1º Série EM",
    materiaFavoritas: ["Filosofia", "Arte", "Matemática", "Geografia"]

}

console.log(aluno1.nome);
console.log(aluno1.materiaFavoritas[2]);

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome
objeto.textContent = aluno1.idade