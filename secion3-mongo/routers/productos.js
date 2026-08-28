import express from 'express';

//conexion a la base de datos 
import { MongoClient,ObjectId } from 'mongodb';
const client = new MongoClient(process.env.DB_URI);
await client.connect();
const db = client.db(process.env.DB_NAME);

//creacion de enrutador
const productosRouter = express.Router();
//creacion de productos
productosRouter.post('/',async (req,res)=>{
    const nuevoProducto= req.body;
    const coleccionProductos =  db.collection('productos');
    await coleccionProductos.insertOne(nuevoProducto);
    res.json({
        status:'ok',
        mensaje: `Se creó un nuevo producto: ${nuevoProducto}-${nuevoProducto.nombre}`
    })
    //send avisa que ya acbo la ejecución 
    // res.send('Creando producto...');
})

export default productosRouter;