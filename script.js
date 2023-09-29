const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')


registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

function logar (){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin@gmail.com" && senha == "senha123"){
        location.href = "tarefas.html";
    }else{
        alert('Usuário ou senha incorretos')
    }

}