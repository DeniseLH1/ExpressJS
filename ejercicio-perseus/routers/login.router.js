import express, { json } from 'express';
import {body} from 'express-validator';
import {compareSync} from 'bcrypt'
import {MongoClient} from 'mongodb'

const loginRouter = express.Router();

loginRouter.post('/',async(req,res)=>{
    const {username, password} = req.body
    const usuario =  await db.collection('usuario').findOne(username);
    if(compareSync(password,usuario.password)){
        res.cookie(
            process.env.AUTH_COOKIE,
            JSON.stringify({usuarioId: usuario._id}),
            {signed:true,maxAge: 2*60*60*1000}
        );
        res.json({status: 'ok',mensaje:'Bienvenido a Perseus'})
    }
    else{
        res.json({
            status: 'Fail',
            mensaje: 'Usuario o contraseña inválida.'
        });
    }
})