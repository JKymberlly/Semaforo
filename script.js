const vermelho = document.getElementById("vermelho");
const bvermelho = document.getElementById("bvermelho");

const amarelo = document.getElementById("amarelo");
const bamarelo = document.getElementById("bamarelo");

const verde = document.getElementById("verde");
const bverde = document.getElementById("bverde");

const bautomatico = document.getElementById("bautomatico")

let corAtiva = null;

function nao(){
    if (corAtiva !== 'vermelha'){
        vermelho.style.backgroundColor = "#FF0000";
        verde.style.backgroundColor = "rgb(0, 43, 0)";
        amarelo.style.backgroundColor = "rgb(121, 103, 0)";
        corAtiva = 'vermelha';
    } else {
        vermelho.style.backgroundColor = "rgb(73, 0, 0)"
        corAtiva = null;
    }
}
function atencao(){
    if (corAtiva !== 'amarelo'){
        amarelo.style.backgroundColor = "#ffff00"
        vermelho.style.backgroundColor = "rgb(73, 0, 0)"
        verde.style.backgroundColor = "rgb(0, 43, 0)"
        corAtiva = 'amarelo'
    } else {
        amarelo.style.backgroundColor = "rgb(121, 103, 0)";
        corAtiva = null;
    }
}
function vai(){
    if (corAtiva !== 'verde'){
        verde.style.backgroundColor = "#008000"
        amarelo.style.backgroundColor = "rgb(121, 103, 0)"
        vermelho.style.backgroundColor = "rgb(73, 0, 0)"
        corAtiva = 'verde'
    } else {
        verde.style.backgroundColor = "rgb(0, 43, 0)"
        corAtiva = null;
    }
}
let intervalo = null;
let estado = 0;

bautomatico.addEventListener("click", () => {
    amarelo.style.backgroundColor = "rgb(121, 103, 0)"
    vermelho.style.backgroundColor = "rgb(73, 0, 0)"
    verde.style.backgroundColor = "rgb(0, 43, 0)"
    if (intervalo === null) {
        intervalo = setInterval(() => {
            if (estado === 0) {
                nao();
            } else if (estado === 1) {
                atencao();
            } else {
                vai();
            }
            estado = (estado + 1) % 3;
        }, 1000);
    } else {
        clearInterval(intervalo);
        intervalo = null;
        amarelo.style.backgroundColor = "rgb(121, 103, 0)"
        vermelho.style.backgroundColor = "rgb(73, 0, 0)"
        verde.style.backgroundColor = "rgb(0, 43, 0)"
    }
});