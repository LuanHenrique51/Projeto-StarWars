class Email {
	constructor(nome, email, nascimento, message) {
		this.nome = nome
		this.email = email
		this.nascimento = nascimento
		this.message = message
	}

	validarDados() {
		for (let i in this) {
			if (this[i] === undefined || this[i] === "" || this[i] === null) {
				if (i !== "message") {
					delete this[i]; // Excluir a propriedade se o valor for indefinido
					continue;
				}
			}

			if (i === "email") {
				if (!this[i].includes("@") || this[i].split("@")[1] === "") {
					return false;
				}
			}

			if (/\d/.test(this.nome)) {
				return false;
			}
		}
		return true;
	}
}

class Bd {

	constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

	recuperarTodosRegistros() {

		let mensagensss = Array()

		let id = localStorage.getItem('id')

		for(let i = 1; i <= id; i++) {

			let mensagenss = JSON.parse(localStorage.getItem(i))

			if(mensagenss === null) {
				continue
			}
			mensagenss.id = i
			mensagensss.push(mensagenss)
		}

		return mensagensss
	}

	remover(id){
		localStorage.removeItem(id)
	}
}

let bd = new Bd();

function Enviar() {
	let nome = document.getElementById("nome");
	let email = document.getElementById("email");
	let message = document.getElementById("message");
    let nascimento = document.getElementById("nascimento");

	let mensagem = new Email(
		nome.value,
		email.value,
		message.value,
        nascimento.value
	);

	if (mensagem.validarDados()) {
		bd.gravar(mensagem);

		alert("Mensagem gravada com sucesso, muito obrigado!");

		nome.value = "";
		email.value = "";
		message.value = "";
        nascimento.value = "";
	} else {
		alert("Erro encontrado, certifique-se de que todos os campos foram preenchidos corretamente.");
	}
}

function carregaLista(mensagenss = Array(), filtro = false) {

    if(mensagenss.length == 0 && filtro == false){
		mensagensss = bd.recuperarTodosRegistros() 
	}
	

    listamensagensss.innerHTML = ''
	mensagensss.forEach(function(d){

		//Criando a linha (tr)
		var linha = listamensagensss.insertRow();

		//Criando as colunas (td)
		linha.insertCell(0).innerHTML = d.nome
		linha.insertCell(1).innerHTML = d.email
		linha.insertCell(2).innerHTML = d.nascimento
		linha.insertCell(3).innerHTML = d.message

		//Criar o botão de exclusão
		let btn = document.createElement('button')
		btn.className = 'btn btn-danger'
		btn.innerHTML = '<i class="bi bi-x-circle"></i>'
		btn.id = `id_mensagenss_${d.id}`
		btn.onclick = function(){
			let id = this.id.replace('id_mensagenss_','')
			//alert(id)
			bd.remover(id)
			window.location.reload()
		}
		linha.insertCell(4).append(btn)
		console.log(d)
	})

 }

 
 function pesquisarmensagenss(){
	 
	let nome  = document.getElementById("nome").value
	let email = document.getElementById("email").value
	let nascimento = document.getElementById("nascimento").value
	let message = document.getElementById("message").value
	let descricao = document.getElementById("descricao").value
	let valor = document.getElementById("valor").value

	let mensagenss = new mensagenss(nome, email, nascimento, message, descricao, valor)

	let mensagensss = bd.pesquisar(mensagenss)
	 
	this.carregaListamensagensss(mensagensss, true)

 }

 //////////////////////////////////////////////////////////////

 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    
    // Verifica se a senha é correta
    if (password === 'doidospormb') {
        document.getElementById('loginForm').style.display = 'none'; // Esconde o formulário de login
        document.getElementById('content').style.display = 'block'; // Mostra o conteúdo restrito
    } else {
        alert('Senha incorreta! Tente novamente.'); // Exibe mensagem de senha incorreta
    }
});