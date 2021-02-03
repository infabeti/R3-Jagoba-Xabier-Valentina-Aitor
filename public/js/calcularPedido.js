function calcular(precio) {
	var cantidad = prompt("¿Cuantos desea?");
	var total;

	if(isNaN(cantidad)){
		alert("Escriba una cantidad adecuada, por favor");
	}else{
		total=((cantidad*precio)*1.21).toFixed(2);
		
		alert("Total(IVA incluido): "+total+"€");
	}

} 


function llamadoApi(){
    
    
    fetch('http://localhost:8080/Productoss/',{
        
    }).then((response) => response.json())
    .then(data =>{


		for(i=0; i<13; i++){
       

		 var datos=Object.values(data.productosList[i])+"<br>";
		

		 var nuevosdatos = datos.replace(/,/g, ' ');
		 

		 $("#datosCarta ul").append('<li>'+nuevosdatos.slice(2)+'</li>');
			   
		}
        
    });
}