//-----------------MODEMON en tiempo real--------------------
// console.log("Hola campers!!!");

//------------------ ejecucion de el modulo  -------------------
// USAR LAS PRIMERAS 3 LINEAS DEL ENV
// import 'dotenv/config';

// console.log(process.env.APP_NAME);
// console.log(process.env.DB_USER);

//-------INICIAR EL SERVIDOR CON EXPRESS ---------------------------
//al momento de ejecutar esto en google poner localhost:5000
//  USAR DE LA LINEA DE LA 7 A 9 
import express from "express";
import 'dotenv/config';
//objeto que define la aplicaion
const app =  express();
//escucha una ruta para cuando el usuario quiera solicitar recursoso 
app.get('/',function(req,res){
    res.send(`Hola!!!\nBienvenido a ${process.env.APP_NAME}`);
});
app.listen({hostname: process.env.HOSTNAME, port: process.env.PORT},()=>{
    console.log(`${process.env.APP_NAME} running on http://${process.env.HOST_NAME}:${process.env.PORT}`);
});
