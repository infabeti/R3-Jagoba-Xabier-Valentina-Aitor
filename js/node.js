const express = require('express')

const web = express()

const path = require('path')

web.listen(3000, ()=> {
	console.log('Web corriendo en el puerto 3000')
})

//Rutas
web.get('/',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'../index.html'))
})

web.get('/index.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'../index.html'))
})

web.get('/restaurantes.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'../restaurantes.html'))
})

web.get('/contacto.html',(request,response)=> {
	response.sendFile(path.resolve(__dirname,'../contacto.html'))
})


