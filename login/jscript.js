const usuarios = [
    {
        login: 'alex',
        pass: '1234'
    },
    {
        login: 'nicole',
        pass: '12345'
    },
    {
        login: 'ticao',
        pass: '4321'
    }
]

let botao = document.getElementById('btn')
let validlogin = false

botao.disabled = true

let validbotao = document.getElementById('ID')

validbotao.addEventListener("change", stateHandle);

function stateHandle (){
if ( document.getElementById('ID').value === ''){
    botao.disabled = true
}
else {
    botao.disabled = false
}   
}

botao.addEventListener('click',
function logar(){
    
    let pUsuario = document.getElementById('ID').value
    let pSenha = document.getElementById('senha').value
    
    
    if (pUsuario == ('')){
        alert (' voce deve inserir o ID')
    }
    
    for(let i in usuarios){
        if(pUsuario == usuarios[i].login && pSenha == usuarios[i].pass) {
            validlogin  = true  
            break;
        }
    } 
    
    if (validlogin == true){
        alert ('Login efetuado com sucesso')
        location.href = 'index.html'
    } 
    else{
        alert ('Dados incorretos. Tente novamente')
    }
    
})
