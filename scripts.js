window.addEventListener("load", function(){
    

    var texto = this.document.querySelector("#texto").innerHTML;
    console.log(texto);


    var pedacos = texto.split(" ");
    console.log(pedacos);



    var palavras  = pedacos.map(function(item){
        return item.replace(".", "").replace(",", "");
    });
    console.log(palavras);



    var titulo = this.document.createElement("h3");
    titulo.innerHTML = "Palavras com tamanho maior que 5:";
    this.document.querySelector("body").appendChild(titulo);

    
    var palavrasMaioresQue5 = palavras.filter(function(item){
        return item.length > 5;
    });
    this.console.log(palavrasMaioresQue5);

    var listaPalavrasMaioresQue5 = this.document.createElement("ul");
    listaPalavrasMaioresQue5.id = "palavras-maiores-que-5";


    palavrasMaioresQue5.forEach(function(item){
        var itemDeLista = this.document.createElement("li");
        itemDeLista.innerHTML = item;
        listaPalavrasMaioresQue5.appendChild(itemDeLista);
    });
    console.log("listaPalavrasMaioresQue5", listaPalavrasMaioresQue5);

    this.document.querySelector("body").appendChild(listaPalavrasMaioresQue5);



    titulo = this.document.createElement("h3");
    titulo.innerHTML = "Palavras com tamanho menor ou igual a 5:";
    this.document.querySelector("body").appendChild(titulo);

    var palavrasMenoresOuIguaisA5 = palavras.filter(function(item){
        return item.length <= 5;
    });
    this.console.log(palavrasMenoresOuIguaisA5);


    var listaPalavrasMenoresOuIguaisA5 = this.document.createElement("ul");
    listaPalavrasMenoresOuIguaisA5.id = "palavras-menores-ou-iguais-a-5";



    palavrasMenoresOuIguaisA5.forEach(function(item){
        var itemDeLista = this.document.createElement("li");
        itemDeLista.innerHTML = item;
        listaPalavrasMenoresOuIguaisA5.appendChild(itemDeLista);
    });
    console.log("listaPalavrasMenoresOuIguaisA5", listaPalavrasMenoresOuIguaisA5);
    this.document.querySelector("body").appendChild(listaPalavrasMenoresOuIguaisA5);

    
});