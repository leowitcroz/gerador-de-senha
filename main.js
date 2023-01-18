let slider = document.querySelector('#slider')
let botao = document.querySelector('#button')
let sizePass = document.querySelector('#valor')
let password =  document.querySelector('#password')
let containerPassword = document.querySelector('#container-password')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"

let novaSenha = "";

sizePass.innerHTML = slider.value

slider.oninput = function(){
    sizePass.innerHTML = this.value;
}

function geradorDeSenha(){
    let pass = ""
    for(let i = 0, n = charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    
    
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass
    
   
}



function copy(){
    
    navigator.clipboard.writeText(novaSenha)
    alert("Senha copiada com sucesso!")
}



