import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import verificarAutenticacion from './utils/verificar-autenticacion.js';

const app = express();

app.use(cookieParser(process.env.SECRET_KEY));
app.use(express.json());

app.post('/login',(req,res)=>{
    res.cookie(process.env.AUTH_COOKIE,'Token',{signed:true});
    res.send('Login');
})

app.get('/usuarios', verificarAutenticacion,(req,res)=>{
    res.send('usuario');
})

app.listen(
    process.env.PORT,()=> console.log(`Perseus is running on http://localhost:${process.env.PORT}`)
);