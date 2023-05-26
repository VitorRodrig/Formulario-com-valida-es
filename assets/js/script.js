const form = document.querySelector('#form-validator')
const inputName = document.getElementById('input-name')
const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const confirmPassword = document.getElementById('inputConfirm-password')
const errorMsgName = document.querySelector('.erroName')
const errorEmail = document.querySelector('.erroEmail')
const minDigits = document.querySelector('.minDigitPassword')
const erroCombination = document.querySelector('.erroCoincide')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Verificando se nome está vazio
    if(inputName.value === ''){
        inputName.style.border = '1px solid #910000'
        errorMsgName.style.display = 'block'
        return
    }else{
        inputName.style.border = '1px solid #999'
        errorMsgName.style.display = 'none'
    }

    //Verificando se e-mail está preenchido e se é um e-mail válido
    if(inputEmail.value === '' || !isValidEmail(inputEmail.value)){
        inputEmail.style.border = '1px solid #910000'
        errorEmail.style.display = 'block'
        return
    } else{
        inputEmail.style.border = '1px solid #999'
        errorEmail.style.display = 'none'
    }

    //Verificando se a senha tem no mínimo 8 digitos
    if(!validPassword(inputPassword.value, 8)){
        inputPassword.style.border = '1px solid #910000'
        minDigits.style.display = 'block'
        return
    } else{
        inputPassword.style.border = '1px solid #999'
        minDigits.style.display = 'none'
    }

    //Senhas que não coincidem
    if(confirmPassword.value !== inputPassword.value){
        confirmPassword.style.border = '1px solid #910000'
        erroCombination.style.display = 'block'
        return
    }


    //Se todos campos estiverem corretamente preenchido, enviar form
    form.submit();
})

//Função para validar e-mail
function isValidEmail(email){
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true
    }

    return false
}

//Função que valida senha

function validPassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    }
    return false
}


    
