import express from 'express';
import { body } from 'express-validator';
import { compareSync } from 'bcrypt';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI);
await client.connect();
const db = client.db(process.env.DB_NAME);

const loginRouter = express.Router();

loginRouter.post('/', async (req, res )=>{
  const { username, password } = req.body;
  const usuario = await db.collection('usuarios').findOne({ username });
  console.log(usuario);
  if(usuario){
    if(compareSync(password, usuario.password)){
      res.cookie(
        process.env.AUTH_COOKIE,
        JSON.stringify({ usuarioId: usuario._id }),
        { signed: true, maxAge: 1*60*1000 }
      );
      res.json({ status: 'Ok', mensaje: 'Bienvenido a Perseus'});
    }
    else{
      res.json({
        status: 'Fail',
        mensaje: 'Usuario o contraseña inválida.'
      });
    }
  }
  else{
    res.json({
      status: 'Fail',
      mensaje: 'Usuario o contraseña inválida.'
    });
  }
})

export default loginRouter;