
// Selecionando elementos do formulario de cadastro
const msgerro = document.getElementById('msgerro');
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const repetirSenha = document.querySelector('#repetir-senha')	
const botao = document.getElementById('btnenviar')
const formulario = document.querySelector('.formulario')
const formbody = document.querySelector('.form-body')
const dh3 = document.querySelector('h3')
const image = document.querySelector('.image')
const logar = document.querySelector('.logar')
const msg = document.querySelector('.msg')
const nomelogado = document.querySelector('.nomeLogado')
const msgLogin = document.querySelector('.msgLogin')


// Declaraçõa de variaveis globais para usa-las nas comparações no login
var email2;
var senha2;
var nome2;


// Validação dos dados do formulario de cadastro  
botao.addEventListener('click', function(e){
	e.preventDefault();
	email2 = email.value;
    nome2 = nome.value;
	senha2 = senha.value;
	const repetirSenha2 = repetirSenha.value;

	if(nome2 === "" || email2 === "" || senha2 === "" || repetirSenha2 === ""){
		msgerro.innerText = "Você deve preencher todos os campos."
		msgerro.style.color = "tomato"
	}else if(senha2 != repetirSenha2){
		msgerro.innerText = nome2 + " as senhas não são iguais. Tente novamente"
		msgerro.style.color = 'tomato';
	}else{
		nomelogado.innerText = nome2
		nomelogado.style.color = 'tomato'
		msg.innerText = ' Seu cadastro foi realizado com sucesso!'
		msg.style.color = 'green'
		msgLogin.innerText = 'Faça login para acessar sua area.'
		msgLogin.style.color = 'grey'
		msgLogin.style.marginTop = '0px'
		msgerro.style.fontSize = '15px'
		email.value = ""
		nome.value = ""
		senha.value = ""
		repetirSenha.value = ""
		formulario.classList = 'fechar-formulario';
		formbody.classList = 'fechar-body'
		dh3.classList = 'fechar-h3'
		image.classList = 'descerimage'
		msgerro.innerText = ""
		logar.classList = 'abrir-logar'
	}
})



// Validação dos dados do formulario de login
const emaillogin = document.querySelector('#emaillogin')
const senhalogin = document.querySelector('#senhalogin')
const btnlogin = document.getElementById('btnlogin');
const desabilitar = document.getElementById('btnlogin')


btnlogin.addEventListener('click', function(a){
	a.preventDefault();
	const eml = emaillogin.value;
	const snh = senhalogin.value;

	if(eml === "" || snh === ""){
		msg.innerText = nome2 + " você deve inserir todos os dados."
		msg.style.color = "tomato"
		nomelogado.innerText = ""
		msgLogin.innerText = ""
	}else if(email2 != eml || snh != senha2){
		msg.innerText = "Login ou senha invalidos."
		msg.style.color = 'tomato'
		nomelogado.innerText = ""
		msgLogin.innerText = ""

	}else{
		msg.innerText = `Bem vindo ao sistema ${nome2} seu acesso está liberado.`
		msg.style.fontSize = '16px'
		nomelogado.innerText = ""
		msgLogin.innerText = ""
		const habilitar = document.querySelector('.acessar')
		habilitar.style.opacity = '9'
	}
})


