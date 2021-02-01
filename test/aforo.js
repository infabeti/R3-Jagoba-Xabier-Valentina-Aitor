function aforo() {
	var tamanio = 10;
	var aforo;
	
	aforo=Math.trunc(tamanio/4);
	
	return aforo;
}

module.exports = {
    aforo:aforo
}
