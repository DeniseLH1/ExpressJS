import express from 'express';
//conexion a la base de datos 
import { MongoClient,ObjectId } from 'mongodb';
import CrearProductoDTO from '../dto/producto.dto.js';
import '../dto/get.all.producto.dto.js';

const client = new MongoClient(process.env.DB_URI);
await client.connect();
const db = client.db(process.env.DB_NAME);

//creacion de enrutador
const productosRouter = express.Router();
//creacion de productos
productosRouter.post('/',async (req,res)=>{
    const nuevoProducto= new CrearProductoDTO(req.body);
    console.log(req.body)
    const coleccionProductos =  db.collection('productos');
    await coleccionProductos.insertOne(nuevoProducto);
    res.json({
        status:'ok',
        mensaje: `Se creó un nuevo producto: ${nuevoProducto}-${nuevoProducto.nombre}`
    })
    //send avisa que ya acbo la ejecución 
    // res.send('Creando producto...');
});

productosRouter.get('/:id',async (req,res) =>{
    const _id = new ObjectId(req.params.id);
    const coleccionProducto =  db.collection('productos');
    const producto =  await coleccionProducto.findOne({_id});
    const resp = new GetProductoDTO(producto)
    console.log(producto);
    res.json({
        status:'ok',
        data: resp
    });
});


productosRouter.get('/',async (req,res) =>{
    const coleccionProducto =  db.collection('productos');
    const productos =  await coleccionProducto.find().toArray();
    const data = productos.map(prd => new GetAllProductoDTO(prd));
    res.json({
        status:'ok',
        data
    });
});

export default productosRouter;