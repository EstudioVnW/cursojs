window.addEventListener("load", function(){
    
        console.log("Estudando strings...");

        var elementoParagrafoDeTexto = this.document.querySelector('#texto');
        console.log(elementoParagrafoDeTexto);
        var texto = elementoParagrafoDeTexto.innerHTML;
        console.log(texto);
        var pedacosDeTexto = texto.split(" ");
        console.log(pedacosDeTexto);

        
        var palavras = pedacosDeTexto.map(function(item){
                return item.replace(",", " ").replace(".", " ") ;
        });
        console.log(palavras);

        

        var listaDePalavrasMaiores5 = document.createElement('ul');
        console.log(listaDePalavrasMaiores5);

        
        var itemdeLista;
        palavrasMaiores5.forEach(function(item){
                itemdeLista = document.createElement('li');
                itemdeLista.innerHTML = item;
                listaDePalavrasMaiores5.appendChild(itemdeLista);
        });
        listaDePalavrasMaiores5.id = 'palavras-maires-lue-5'
        body.appendChild(listaDePalavrasMaiores5);

        var palavrasMaiores5 = palavras.filter(function(item){
                return item.length > 5;
        });
        console.log(palavrasMaiores5);

        var objElementoTitulo = document.createElement('h3');
        objElementoTitulo.innerHTML = 'Palavras maiores que 5 caracteres';
        console.log(objElementoTitulo);
        var body = document.querySelector('body');
        body.appendChild(objElementoTitulo);

        var palavrasMenores5 = palavras.filter(function(item){
                return item.length <= 5;
        });
        console.log(palavrasMenores5)
});




// var myString = 'Hello World. How are you doing?';
// var splits = myString.split(' ', 3);

// console.log(splits);
