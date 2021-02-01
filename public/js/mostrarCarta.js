var oculto=true;
	function mostrar(numero) {
		var nombre = 'carta'+numero;
		
		
		if(oculto==true){
			document.getElementById(nombre).style.display = 'block';
			oculto=false;
		}else{
			document.getElementById(nombre).style.display = 'none';
			oculto=true;
		}
	}