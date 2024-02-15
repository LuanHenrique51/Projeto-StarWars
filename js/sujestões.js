/*class sujestão {
	constructor(nomes, messages, modulo, enquete) {
		this.nomes = nomes
		this.messages = messages
        this.modulo = modulo
        this.enquete = enquete
	}


validarDados() {
    for (let i in this) {
      if (this[i] == undefined || this[i] == "" || this[i] == null) {
        if (i !== "nomes" && i !== "messages") {
            return false;
          }
      }

	  if (i === "modulo" && this[i] === "...") {
        return false;
      }

	  if (i === "enquete" && this[i] === "...") {
        return false;
      }

      if (/\d/.test(this.nomes)) {
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

let bd = new Bd()

function Enviar() {
	let nomes = document.getElementById('nomes')
	let messages = document.getElementById('messages')
    let modulo = document.getElementById('modulo')
    let enquete = document.getElementById('enquete')

	let sujestao = new sujestão(
		nomes.value,
		messages.value,
        modulo.value,
        enquete.value
	)


	if(sujestao.validarDados()) {
		bd.gravar(sujestao)

		alert("muito obrigado pela sua mensagem!");

        nomes.value = "";
        messages.value = "";
        modulo.value = "";
        enquete.value = "";
		
	} else {
		alert("Erro ao gravar a sujestão, certifique-se que todos os campos foram preenchidos.");
	}
}

function carregaLista1(mensagenss = Array(), filtro = false) {

    if(mensagenss.length == 0 && filtro == false){
		mensagensss = bd.recuperarTodosRegistros() 
	}
	

    listamensagensss.innerHTML = ''
	mensagensss.forEach(function(d){

		//Criando a linha (tr)
		var linha = listamensagensss.insertRow();

		//Criando as colunas (td)
		linha.insertCell(0).innerHTML = d.nomes
		linha.insertCell(1).innerHTML = d.modulo
		linha.insertCell(2).innerHTML = d.enquete
		linha.insertCell(3).innerHTML = d.messages

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
	 
	let nomes  = document.getElementById("nomes").value
	let modulo = document.getElementById("modulo").value
	let enquete = document.getElementById("enquete").value
	let messages = document.getElementById("messages").value

	let mensagenss = new mensagenss(nomes, modulo, enquete, messages)

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
*/
