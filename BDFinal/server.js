const express = require('express')
const app = express()

//Importar conexion mongoDB
const archivoBD = require('./conexion')


//Importar rutas y modelo
const rutausuario =require('./rutas/usuario')

//Importar body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/usuario',rutausuario)

app.get('/',(req,res)=>{
    res.end('Bienvenido al servidor backend NODE. Corriendo...')
})


//Configuracion server basico
app.listen(5000, function(){
    console.log('Servidor levantado en el puerto 5000...');
}

)