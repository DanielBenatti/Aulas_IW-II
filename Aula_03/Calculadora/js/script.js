var resultado = document.getElementById('result')

function soma(){
   var n1 = Number(document.getElementById('num1').value)
   var n2 = Number(document.getElementById('num2').value)
   var res = n1+n2
   resultado.innerHTML = res
}
function sub(){
    var n1 = Number(document.getElementById('num1').value)
    var n2 = Number(document.getElementById('num2').value)
    const res = n1-n2
    resultado.innerHTML = res
}
function mult(){
    var n1 = document.getElementById('num1').value
    var n2 = document.getElementById('num2').value
    const res = n1*n2
    resultado.innerHTML = res
}
function div(){
    var n1 = document.getElementById('num1').value
    var n2 = document.getElementById('num2').value
    const res = n1/n2
    resultado.innerHTML = res
}
function limp(){
    resultado.innerHTML = 0
}