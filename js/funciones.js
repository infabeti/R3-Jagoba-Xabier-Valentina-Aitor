$(document).ready(inicio);

function inicio(){	
	$(".enlace").click(function(){

		var carta =$(this).next('div#carta');
		var estado = carta.css('display')

		if(estado == 'none'){
			carta.css('display','block');
			$(this).text("Ocultar carta");
		}else{
			carta.css('display','none');
			$(this).text("Mostrar carta");
		}
	});

	$(".boton").click(function(){
		$("#menu").sortTable("letter");
	});	

	$(".boton2").click(function(){
		$("#menu").sortTable("letter", {column: 2, reverse: false});
	});	

	$(".boton3").click(function(){
		$("#menu").sortTable("letter", {column: 2, reverse: true});
	});
}