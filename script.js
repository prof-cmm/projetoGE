function inserirNome(){
let nomeUsuario = prompt ("Qual o seu  nome?");
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario
}

inserirNome();

let linguaguens = ["JavaScript", "Python", "C"];

const item = document.querySelector("#lista");
item.textContent = linguaguens[0];
