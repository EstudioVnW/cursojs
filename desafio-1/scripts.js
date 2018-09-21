window.addEventListener("load", function(){
	// colocar o texto em variável
    var elementoTexto = this.document.querySelector("#texto");
    console.log(elementoTexto);
    var texto = elementoTexto.innerHTML;
    console.log(texto)

    //quebrar texto em palavras
    var pedacosTexto = texto.split(" ");
    console.log(pedacosTexto)

    //tirar pontos e vírgulas
    var palavras = pedacosTexto.map(function(item){
    	return item.replace(".", "").replace(",", "")
    });
    console.log(palavras);

    //filtrar palavras maiores
    var palavrasMaiores = palavras.filter(function(item){
    	return item.length > 5
    });
    console.log(palavrasMaiores)

    //criar titulo
    var elementoTitulo1 = document.createElement("h3");
    elementoTitulo1.innerHTML = "Palavras maiores que 5 caracteres";
    console.log(elementoTitulo1);
    var body = document.querySelector("body");
    body.appendChild(elementoTitulo1)

    //criar lista de palavras maiores que 5
    var listaMaiores = document.createElement("ul");
    console.log(listaMaiores)

    //transformar array em lista html
    var itemDaLista1;
    palavrasMaiores.forEach(function(item){
    	itemDaLista1 = document.createElement("li")
    	itemDaLista1.innerHTML = item;
    	listaMaiores.appendChild(itemDaLista1)
    });
    body.appendChild(listaMaiores)

    //filtrar palavras menores
    var palavrasMenores = palavras.filter(function(item){
    	return item.length <= 5
    });
    console.log(palavrasMenores)

    //criar titulo
    var elementoTitulo2 = document.createElement("h3");
    elementoTitulo2.innerHTML = "Palavras menores ou iguais a 5 caracteres";
    console.log(elementoTitulo2);
    body.appendChild(elementoTitulo2)

    //criar lista de palavras menores ou iguais a 5 caracteres
    var listaMenores = document.createElement("ul");
    console.log(listaMenores)

    //transformar array em lista html
    var itemDaLista2;
    palavrasMenores.forEach(function(item){
    	itemDaLista2 = document.createElement("li");
    	itemDaLista2.innerHTML = item;
    	listaMenores.appendChild(itemDaLista2)
    });
    body.appendChild(listaMenores)
});