$(document).ready();
function aforo() {
	var tamanio = prompt("¿Cuantos m2 tiene su local?");
	var aforo;
	
	if(isNaN(tamanio)){
		alert("Escriba un tamaño adecuado, por favor");
	}else{
		aforo=Math.trunc(tamanio/4);
		alert("En tu local entran tiene un aforo de "+aforo+" personas");
	}
	return aforo;
}

module.exports = {
    calcular:calcular
}