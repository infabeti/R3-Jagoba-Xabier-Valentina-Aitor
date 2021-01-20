$(document).ready();
function calcular(precio) {
	var cantidad = prompt("¿Cuantos desea?");
	var total;
	
	if(isNaN(cantidad)){
		alert("Escriba una cantidad adecuada, por favor");
	}else{
		total=(cantidad*precio)*1.21;
		parseInt(total);
		alert("Total(IVA incluido): "+total+"€");
	}
	
}

module.exports = {
    calcular:calcular
}