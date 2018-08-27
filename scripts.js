window.addEventListener("load", ListasDePalavras);

function ListasDePalavras(){
    console.log(listaDePalavras);

    var titulo = this.document.createElement("h3");
    titulo.innerHTML = "Palavras com tamanho maior que 5:";
    this.document.querySelector("body").appendChild(titulo);

    var  listaDePalavrasMais = ["JavaScript", "Passar", "Executados", "Controlando", "Conteúdo"];
    console.log(listaDePalavrasMais);

    listaMais = listaDePalavrasMais;

    var listaDePalavras = document.createElement('ul');
    var body = document.querySelector('body');
    ListasDePalavras.innerHTML = listaDePalavras;
    body.appendChild(listaDePalavras);

    listaMais.forEach(function(elemento){
        itemPalavras = document.createElement('li');
        itemPalavras.innerHTML = elemento;
        listaDePalavras.appendChild(itemPalavras)
    });

    
    var titulo = this.document.createElement("h3");
    titulo.innerHTML = "Palavras com tamanho menor que 5:";
    this.document.querySelector("body").appendChild(titulo);

    var listaDePalavrasMenos = ["Quem", "Vai", "Na", "Web", "Hein"];
    console.log(listaDePalavrasMenos);

    listaMenos = listaDePalavrasMenos;

    var listaDePalavras = document.createElement('ul');
    var body = document.querySelector('body');
    ListasDePalavras.innerHTML = listaDePalavras;
    body.appendChild(listaDePalavras);

    listaMenos.forEach(function(elemento){
        itemPalavras = document.createElement('li');
        itemPalavras.innerHTML = elemento;
        listaDePalavras.appendChild(itemPalavras);
    });


};
