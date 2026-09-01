//importacion de libreria express
import express from 'express';
//importacion de cookie parser
import cookieParser from 'cookie-parser';

//objeto que define la aplicaion
const server = express();

//midleware
server.use(cookieParser('Abc123*'));

//peticion para el servidor
server.post('/',(req, res)=>{

     ////enviocookie al cliente por medio de res aqui establecmeos todas las cookies del usuario 
    ////las cookie son clave valor siempre que creemos una cookie es clave = valor 
    // res.cookie('campus','usuario=denise');
    // res.cookie('ciudad','Guatemala');

    //Enviamos preferencias que por defecto le mandaremos al usuario
    const preferencias={
        idioma: "spanish",
        moneda: "QTZ",
        tema: "Dark"
    };
    //aqui enviamos al cookies a mi cleinte 
    //convierte de un objeto a cadena de texto javascript
    res.cookie('preferencias',JSON.stringify(preferencias),{
        secure:true, // Solo transferida por HTTPS 
        signed: true, // firmada la cookie para verificar validez
        maxAge: 60*1000 // Tiempo de vida de la cookie
    });
    res.send('Cookie creada');
});

//leemos las preferencias del cliente para poderle responder dependiendo dec sus preferencias
server.get('/leer-cookie',(req,res)=>{
    const preferencias = JSON.parse(req.cookies.preferencias);
    res.json(preferencias);
});

server.get('/verificar-firma',(req,res)=>{
    const cookieFirmada=req.signedCookies.preferencias
    let respuesta;
    if(cookieFirmada){
        respuesta = 'cookie segura'
    }
    else{
        respuesta='cookie insegura'
    }
    res.send(respuesta);
})

server.delete('/',(req,res)=>{
    res.clearCookie('preferencias');
    res.send('Cookie Eliminada...')
})

server.listen(4000,()=>{
    console.log('Servidor corriendo en http://localhost:4000');
})