visor = document.querySelector(".resultado")
result = document.querySelector(".igual")

function inserir(valor){
    visor.innerHTML += `${valor}`
}

function limpar(){
    visor.innerHTML = ""
}

function apagar(){
    if(visor.textContent){
       res = document.querySelector('.resultado').innerHTML
       visor.innerHTML = res.substring(0, res.length -1)
    }
}

function resultado(){
    visor.innerHTML = eval(visor.innerHTML)
}
