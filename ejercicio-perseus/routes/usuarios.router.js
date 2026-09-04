import { Router } from 'express';
import { body } from 'express-validator';
import { hashSync } from 'bcrypt';
import { MongoClient } from 'mongodb';

import { validatorHandler } from '../helpers/validation.handler.js';
import { CrearUsuarioDTO } from '../dto/crear.usuario.dto.js';
import { ObtenerUsuarioDTO } from '../dto/obtener.usuarios.dto.js';

const client = new MongoClient(process.env.DB_URI);
await client.connect();
const db = client.db(process.env.DB_NAME);

const usuarioRouter = Router();
const validarCreacion = [
  body('username')
    .notEmpty().withMessage('Nombre de usuario requerido.')
    .isString().withMessage('El nombre de usuario debe ser texto.')
    .isLength(3).withMessage('El nombre de usuario debe contener mínimo 3 caracteres.'),
  body('password')
    .notEmpty().withMessage('Contraseña requerida.')
    .isStrongPassword().withMessage('La contraseña debe ser fuerte-'),
  body('activo')
    .isBoolean().withMessage('El campo activo debe ser booleano (true/false)'),
    validatorHandler
];

usuarioRouter.get('/', async (req, res)=>{
  const usuarios = (await db.collection('usuarios').find().toArray()).map( usr => new ObtenerUsuarioDTO(usr));
  res.json({
      status: 'ok',
      data: usuarios
    });
});

usuarioRouter.post('/', validarCreacion, async (req, res, next)=>{
  try{
    console.log(req.body);
    const result = await db.collection('usuarios').insertOne(new CrearUsuarioDTO({...req.body, password: hashSync(req.body.password, 10),fechaRegistro: new Date()}));
    console.log(result);
    res.json({
      status: 'ok',
      mensaje: `Se ha registrado al usuario ${req.body.username} con el id: ${result.insertedId}`
    });
  }
  catch(error){
      next(error);
  }
});

export default usuarioRouter;