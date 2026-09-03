import express from 'express';
// import {rateLimit} from 'express-rate-limit';
import { saleLimitReq, userLimitReq } from './limiters.js';

const app = express();

app.use('/sale/', saleLimitReq);
app.use('/user/',userLimitReq);

app.get('/sale/create',(req,res)=>{
    res.send('Creating sale...')
})

app.get('/user/get',(req,res)=>{
    res.send('Getting user...')
})

app.listen(3000,()=>{
    console.log('Servidor corriendo en http://localhost:3000');
})
