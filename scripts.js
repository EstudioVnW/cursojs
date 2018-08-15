window.addEventListener("load", function(){

    const body = document.querySelector('body');
    const listaMaior = document.createElement('ul');
    const listaMenor = document.createElement('ul');

    const tituloMaior = document.createElement('h3');
    const tituloMenor = document.createElement('h3');

    tituloMaior.innerHTML = 'Palavras com tamanho maior que 5:';
    tituloMenor.innerHTML = 'Palavras com tamanho menor ou igual a 5:';

    body.appendChild(tituloMaior);
    body.appendChild(listaMaior);
    body.appendChild(tituloMenor);
    body.appendChild(listaMenor);

    const paragrafo = document.querySelector('#texto').innerHTML;
    const palavras = paragrafo.split(' ');

    palavras.forEach(inserirNaLista);

    function inserirNaLista(elemento){

    	const item = document.createElement('li');
		if (elemento[elemento.length - 1] == '.' || elemento[elemento.length - 1] == ','){
			item.innerHTML = elemento.substr(0,(elemento.length - 1));		
		} else {
			item.innerHTML = elemento;
		};

    	if (elemento.length > 5){
			listaMaior.appendChild(item);
    	} else {
    		listaMenor.appendChild(item);	
    	};
    };

});