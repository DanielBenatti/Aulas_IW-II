const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')

function quebrada(){
    return lamp.src.indexOf('quebrada') > -1
    //isso retorna "true" ou "false"
}
function lampLigada(){
    if(!quebrada()){
        lamp.src = "img/ligada.png"
    }
}
function lampDesligada(){
    if(!quebrada()){
        lamp.src = "img/desligada.png"
    }
}
function lampQuebrada(){
    lamp.src = "img/quebrada.png"
}
function Restaurar(){
    lamp.src = "img/desligada.png"
}

ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)
restaurar.addEventListener('click', Restaurar)

lamp.addEventListener('mouseover', lampLigada)
lamp.addEventListener('mouseleave', lampDesligada)
lamp.addEventListener('dblclick', lampQuebrada)