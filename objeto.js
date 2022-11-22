let pessoa = {
    nome: "vitor",
    idade: 24,
    sexo: "M",
    Ano(a){
        this.idade += a
    }
}

pessoa.Ano(6)
console.log(pessoa)