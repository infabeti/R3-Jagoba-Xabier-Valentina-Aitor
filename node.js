const express = require('express')

const web = express()

const path = require('path')

web.listen(3000, function(error) {
	if(error){
		console.log('Se ha producido un error')
	}else{
		console.log('Web corriendo en el puerto 3000')
	}
})



web.use(express.static("public"))

//Rutas
web.get('/',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'index.html'),function(error){
		if (error){
			response.status(404).send("<p>Error 404: No se encuentra la página principal</p>");
		}
	});
});

web.get('/index.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'index.html'),function(error){
		if (error){
			response.status(404).send("<p>Error 404: No se encuentra la página principal</p>");
		}
	});
});


web.get('/bares.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'bares.html'),function(error){
		if (error){
			response.status(404).send("<p>Error 404: No se encuentra la página bares</p>");
		}
	});
});

web.get('/restaurantes.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'restaurantes.html'),function(error){
		if (error){
			response.status(404).send("<p>Error 404: No se encuentra la página restaurantes</p>");
		}
	});
});

web.get('/cafeterias.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'cafeterias.html'),function(error){
		if (error){
			response.status(404).send("<p>Error 404: No se encuentra la página cafeterias</p>");
		}
	});
});

web.get('/contacto.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'contacto.html'),function(error){
		if (error){
			response.status(404).send("<p>Error 404: No se encuentra la página contacto</p>");
		}
	});
});


