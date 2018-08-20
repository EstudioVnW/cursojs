window.addEventListener("load", function(){

    /* Pegando o texto no documento html */
    var texto = this.document.querySelector("#texto").innerHTML;

    /* Veja no console o texto que foi extraído do documento */
    console.log(texto);

    /* Quebrando o texto em pedaços */
    var pedacosDeTexto = texto.split(" ");
    
    console.log(pedacosDeTexto);

    /* Retirando pontos e vírgulas de cada pedaço de texto */
    var palavras  = pedacosDeTexto.map(function(item){
        return item.replace(".", "").replace(",", "");
    });

    console.log(palavras);

    /* Criando o título e colocando-o no documento */
    var titulo = this.document.createElement("h3");
    titulo.innerHTML = "Palavras com tamanho maior que 5:";
    this.document.querySelector("body").appendChild(titulo);

    /* Filtrando as palavras as palavras com tamanho maior que 5 caractes  */
    var palavrasMaioresQue5 = palavras.filter(function(item){
        return item.length > 5;
    });

    this.console.log(palavrasMaioresQue5);

    /* Criando uma lista <ul id="palavras-maiores-que-5"></ul> */
    var listaPalavrasMaioresQue5 = this.document.createElement("ul");
    listaPalavrasMaioresQue5.id = "palavras-maiores-que-5";

    /* Criando itens de lista com palavras, por exemplo <li>JavaScript</li>, e inserindo na lista <ul> */
    palavrasMaioresQue5.forEach(function(item){
        var itemDeLista = this.document.createElement("li");
        itemDeLista.innerHTML = item;
        listaPalavrasMaioresQue5.appendChild(itemDeLista);
    });

    console.log("listaPalavrasMaioresQue5", listaPalavrasMaioresQue5);

    /* Inserido a lista já finalizada no corpo do documento */
    this.document.querySelector("body").appendChild(listaPalavrasMaioresQue5);


    /* Processo análogo a seguir */

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