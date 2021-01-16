var num = window.document.querySelector('input#recebe_num')
var resultado = window.document.querySelector('div#resultado')

var soma = window.document.querySelector('input#soma')
var subtrai = window.document.querySelector('input#subtrai')
var multiplica = window.document.querySelector('input#multiplica')
var divide = window.document.querySelector('input#divide')

var igual = window.document.querySelector('input#calcular')
 
var op
var result = 0
cont = 0

function operacao(valor){
    if(valor == 1){
        op = 'soma'
        if(cont == 0){
            result += Number.parseInt(num.value)
            cont++
        }
    }
    else if (valor == 2) {
        op = 'subtrai'
        if(cont == 0){
            result += Number.parseInt(num.value)
            cont++
        }
    }
    else if (valor == 3) {
        op = 'multiplica'
        if(cont == 0){
            result += Number.parseInt(num.value)
            cont++
        }
    }else{
        op = 'divide'
        if(cont == 0){
            result += Number.parseInt(num.value)
            cont++
        }
    }
}

function calcular() {
    if(op == 'soma'){
      result += Number.parseInt(num.value)
      console.log(result)
      resultado.innerHTML = `${result}`
    }
    else if (op == 'subtrai') {
     result -= Number.parseInt(num.value)
     console.log(result)
    }
    else if (op == 'multiplica') {
        result *= Number.parseInt(num.value)
        console.log(result)
    }else{
        result /= Number.parseInt(num.value)
        console.log(result)
    }
}