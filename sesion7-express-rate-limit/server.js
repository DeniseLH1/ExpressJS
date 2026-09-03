import express from 'express';
import {rateLimit} from 'express-rate-limit';

const app = express();
//Gold 5
//Silver 3 

// creacion de middleware
const limiter = rateLimit({
    //indica que el limite sea por minuto por defecto el limit es de 5 minutos 
    windowMs: 60*1000,
    // limitacion
    limit: (req,res)=>{
        if(req.headers['user-category']=='Gold')
            return 5
        else return 3
    },
    message: (req,res)=>{
        if(req.headers['user-category']=='Gold')
            return 'Ha superado el limite de solicitudes. Como cliente Gold tiene derecho a 5 solicitudes por minuto'
        else return 'Ha superado el limite de solicitudes. Como cliente Silver tiene derecho a 3 solicitudes por minuto'
    },
    statusCode: 409,
    headers: true
});

app.use(limiter);

app.get('/',(req,res)=>{
    res.send('Hola Camper!!!');
});

app.listen(3000,()=>{
    console.log('Servidor corriendo en http://localhost:3000');
})
