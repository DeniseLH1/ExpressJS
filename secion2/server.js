// import express from 'express';
// //la siguinete linea indica que tendra una variable de entorno 
// import 'dotenv/config'
// //objeto para crear api redsful
// const server = express();

// server.get('/',(req,res)=>{
//     res.status(200).send("Hola Campers!")
// })

// server.listen(process.env.PORT,()=>{
//     console.log(`Server running on http://localhost:${process.env.PORT}`);
// });

//----------------------------------------------------------------
import express from 'express';
import 'dotenv/config';
 
const server = express();
 
const estudiantes = [
  { id: 1, code: 'E001', name: 'Pablo Navas' },
  { id: 2, code: 'E002', name: 'Antonio Toto' },
  { id: 3, code: 'E003', name: 'Jeshua Peso Pluma' },
  { id: 4, code: 'E004', name: 'Dulces Sueños' },
];
 
server.get('/', (req, res)=>{
    const user=req.headers.user
  res.status(200).send(`Hola! Este es el sistema de estudiantes de Campus!! usuario:${user}`);
});
 
server.get('/estudiante', (req, res)=>{
  res.status(200).json(estudiantes);
});
 
server.get('/estudiante/:id', (req, res)=>{
  const estud = estudiantes.find((est)=> est.id === parseInt(req.params.id));
  if( estud)
    res.status(200).json(estud);
  else
    res.status(404).send("No se encontró estudiante")
});
 
server.get('/estudiante/:id/notas/:materiaId', (req, res)=>{
  res.status(200).send(`Se solicitó las notas del estudiante ${req.params.id} de la materia ${req.params.materiaId}`);
});
 
server.listen( process.env.PORT, ()=>{
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});