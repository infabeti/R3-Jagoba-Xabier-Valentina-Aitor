function calcular(precio) {
	var cantidad = 5;
	var total;

	total=((cantidad*precio)*1.21).toFixed(2);
	
	return total;
} 

module.exports = {
    calcular:calcular
}