var oculto=true;

function mostrar(numero) {
	var nombre = 'opinion'+numero;
	
	
	if(oculto==true){
		document.getElementById(nombre).style.display = 'block';
		oculto=false;
	}else{
		document.getElementById(nombre).style.display = 'none';
		oculto=true;
	}
}