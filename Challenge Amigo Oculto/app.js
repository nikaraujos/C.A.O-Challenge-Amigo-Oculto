//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let Amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let amigoIncluido = input.value;


    if(!amigoIncluido){
        alert('digite um nome válido');
        return;
}

    listaAmigos.push(amigoIncluido);
    input.value = "";
    input.focus();
    console.log(listaAmigosmigos)
    atualizarLista();

}

function atualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < listaAmigos.clientHeight; i++) {
        let item = document.createElement ("li");
        item.textContent = listaAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length===0){
        alert('Nenhum amigo foi adicionado');
        return;
    }

    let amigoSorteado = Amigos[Math.floor(Math.random() * Amigos.length)];
    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `o amigo sorteado foi : ${amigoSorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    listaAmigos = [];
}

function reiniciar() {
    Amigos = [];

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    alert("Jogo reiniciado!")
}