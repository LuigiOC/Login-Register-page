let passRemember = document.querySelector('#password-remember');
let btnlightz = document.querySelector('.btn');


//User teste para login
let user1 = {
    email: "teste@gmail.com",
    password: "12345"
}


//Função de login
function login(){
    let pass = document.querySelector('#password-user');
    let email = document.querySelector('#email-user');
    let usuario = user1.email
    let pas = user1.password

    if (pass.value === pas && usuario === email.value){
        alert("Logou")
    } else {
        alert('Deu algo de errado com a tentiva de login')
    }
}

//Função para ir para pagina de troca de senha
function aler(){
    alert("Vai para página de troca de senha")
}

//Troca de cor do site para mode dark
function darkButton(){
    let bodi = document.querySelector('body')
    let dark = bodi.classList.toggle("body-dark")
    let img = document.querySelector("#img-lightdark")
        
    if(bodi.className === "body-dark"){
        document.querySelector('.btn').style.background = 'white'
        img.src ="/assets/svg/iconelight.svg"
    } else {
        document.querySelector('.btn').style.background = 'black'
        img.src ="/assets/svg/iconedark.svg"
    }
}






