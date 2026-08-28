import express from 'express';

//paquete para trabajar con los formularios de html
import bodyParser from 'body-parser';

//variable de entorno 
import 'dotenv/config';
import productosRouter from './routers/productos.js';

const app= express();

// indica que usaremos un midleware
app.use(express.json());

app.use()

//para sevir archivos estaticos usando el siguiente midlleware la cual dira la ubicacion de la carpeta y luego la carpeta exacta en este caso public
app.use(express.static(`${import.meta.dirname}/public`))

//rutas definidad
app.use('/producto',productosRouter)

//indicamos en que puerto hacer las solicitudes
app.listen(
    {
        hostname: process.env.HOST,
        port: process.env.PORT
    },
    ()=>{console.log(`${process.env.APP} is running on http://${process.env.HOST}:${process.env.PORT}`)}
)