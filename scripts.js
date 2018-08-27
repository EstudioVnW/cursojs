window.addEventListener("load", function(){

// function desafio(){
//     console.log("testando...");

    var TextoCompleto = this.document.querySelector("#texto");
    console.log(TextoCompleto);
    var texto = TextoCompleto.innerHTML;
    console.log(texto);
    var pedacosDeTexto = texto.split(" ");
    console.log (pedacosDeTexto);

    var palavras = pedacosDeTexto.map(function(item){
        return item.replace(".", "").replace(",", "");

    });
    console.log(palavras);

    var objElemmentoTitulo = document.createElement("h3");
    objElemmentoTitulo.innerHTML = "Palavras maiores que 5 caracteres";
    console.log(objElemmentoTitulo);
    var body = document.querySelector("body");
    body.appendChild(objElemmentoTitulo);

    var listaDePalavrasMaioresque5 = this.document.createElement("ul");
    this.console.log(listaDePalavrasMaioresque5);

    var itemDeLista;
    palavrasMaioresQue5.forEach(function(item){
        itemDeLista = document.createElement("li");
        itemDeLista.innerHTML = item;
        listaDePalavrasMaioresque5.appendChild(itemDeLista);
    });
    listaDePalavrasMaioresque5.id = "palavras-maiores-que-5";
    body.appendChild(listaDePalavrasMaioresque5);
    // body.appendChild(objElemmentoTitulo);

    var palavrasMaioresQue5 = palavras.filter(function(item){
        return item.length > 5;
    });
    console.log(palavrasMaioresQue5);

    var palavrasMenoresQue5 = palavras.filter(function(item){
        return item.length <= 5;
    });
    console.log(palavrasMenoresQue5);

    



    
    // escreva sua solução aqui


});