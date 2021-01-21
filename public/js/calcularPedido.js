//$(document).ready();
function calcular(precio,cantidad) {
	var total;
	
		total=(cantidad*precio)*1.21;
		parseInt(total);
		alert("Total(IVA incluido): "+total+"€");
		return total;
}

module.exports = {
    calcular:calcular
}