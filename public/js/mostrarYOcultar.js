$(document).ready();
	function muestra(){
		var texto=$("#info span");
		var mostrar=$("#mostrar");
		var ocultar=$("#ocultar");
		var puntos=$("#puntos");
		
	
		if(texto.hasClass("oculto")){
			texto.removeClass("oculto");
			texto.addClass("visible");
			mostrar.removeClass("visible");
			mostrar.addClass("oculto");
			ocultar.removeClass("oculto");
			ocultar.addClass("visible");
			puntos.removeClass("visible");
			puntos.addClass("oculto");
		}
	
		else{
			texto.removeClass("visible");
			texto.addClass("oculto");
			mostrar.removeClass("oculto");
			mostrar.addClass("visible");
			ocultar.removeClass("visible");
			ocultar.addClass("oculto");
			puntos.removeClass("oculto");
			puntos.addClass("visible");
	}
}
	