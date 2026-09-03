import { Router } from 'express';
import { body } from 'express-validator';
import {MongoClient} from 'mongodb';
import { validatorHandler } from '../helpers/validation.handler.js';

const client = new MongoClient(process.env.DB_URI);
await client.connect();
const db = client.db(process.env.DB_NAME);

const userRouter = Router();

const validarCreacion=[
    body('username')
        .notEmpty().withMessage('Nombre de usuario requerido')
        .isString().withMessage('El nombre de usuario debe ser texto')
        .isLenght(3).withMessage('El nombre de usuario debe contener minimo 3 caracteres.'),
    body('password')
        .notEmpty().withMessage('Contraseña requerida')
        .isStrongPassword().withMessage('La contraseña debe ser fuerte'),
    body('active')
        .isBoolean.withMessage('El campo activo debe ser booleano(true/false)'),
        validatorHandler
];

userRouter.get('/', (req, res)=>{
    res.send('Listando usuarios...')
});

userRouter.post('/', async(req, res,next)=>{
    try{
        const result= await db.collection('usuarios').insertOne(new CrearUsuarioDTO(req.body))
        res.json({
            status: 'ok',
            mensaje: `Se ha registrado al usuario ${result.username} con el id :${result._id}`
        })

    }
    catch(error){
        (error);
    }
    
});

export default userRouter;