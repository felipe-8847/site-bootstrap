let nome = document.querySelector("#name")
let email = document.querySelector("#email")

let nomeOk = false
let emailOk = false

function validarNome (){

    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }

 function enviar() {
    if (nomeOk == true && emailOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }