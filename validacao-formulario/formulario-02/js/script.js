
function validarCamposComuns(){
    debugger;
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('password-confirm');

    if(passwordConfirm.value !== password.value) {
        passwordConfirm.setCustomValidity("senhas com valores diferentes");
    }
}

function validarDados(f) {
    let elementos = f.elements;
    let erros = "";
    let cont = 0;

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].setCustomValidity("");
    }
  
    validarCamposComuns();
  
    for (let i = 0; i < elementos.length; i++) {
        const current = elementos[i];
        if (!current.validity.valid) {
            erros += `Campo ${current.name}: ${current.validationMessage}\n`;
            cont++;
        }
    }

    if (cont > 0) {
        alert(erros);
        return false;
    }

    return true;
}

function initPage(){

    let form = document.getElementById('f2').onsubmit = function(){
        return validarDados(this);
    }
    document.getElementById("f2").noValidate = true;
}

window.onload = initPage;