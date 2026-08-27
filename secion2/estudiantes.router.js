import express from 'express';

const estudiantesRouter = express.Router();

//metodos 
const estudiantes = [ //esto es un array
    { id: 1, code: 'E001', name: 'Pablo Navas' },
    { id: 2, code: 'E002', name: 'Antonio Toto' },
    { id: 3, code: 'E003', name: 'Jeshua Peso Pluma' },
    { id: 4, code: 'E004', name: 'Dulces Sueños' },
];


estudiantesRouter.get('/', (req, res)=>{
    res.status(200).json(estudiantes);
});

estudiantesRouter.get('/:id', (req, res)=>{
    const estud = estudiantes.find((est)=> est.id === parseInt(req.params.id));
    if( estud)
      res.status(200).json(estud);
    else
      res.status(404).send('Estudiante no encontrado');
});


export default estudiantesRouter; // porque hacemos esto ? porque necesitamos exportarlo porque lo vamos a usar en el server

