$(document).ready();
function muestra(ide){ //ide es el id del div, para saber sobre que restaurante actuará la función (cada div es un restaurante)
	var texto=$("#"+ide+" span");
	var mostrar=$("#"+ide+" #mostrar");
	var ocultar=$("#"+ide+" #ocultar");
	
	if(texto.hasClass("oculto")){
		texto.removeClass("oculto");
		texto.addClass("visible");
		mostrar.removeClass("visible");
		mostrar.addClass("oculto");
		ocultar.removeClass("oculto");
		ocultar.addClass("visible");
	}
	
	else{
		texto.removeClass("visible");
		texto.addClass("oculto");
		mostrar.removeClass("oculto");
		mostrar.addClass("visible");
		ocultar.removeClass("visible");
		ocultar.addClass("oculto");
	}
}