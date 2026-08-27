import express from 'express';
const cursosRouter = express.Router();
const cursos = [];

cursosRouter.get('/',(req, res)=>{
    res.json(cursos);
});

cursosRouter.get('/:id',(req, res)=>{
    const cursoId= parseInt(req.params.id);
    const curso = cursos.find(cur=> cur.id == cursoId);
    if(curso)
        res.json(cursos);
    else
        res.status(404).json({error: `Curso con id: ${cursoId} no encontrado`});

});


cursosRouter.post('/',(req, res)=>{
    const curso = {id: Date.now(), ...req.body};
    cursos.push(curso);
    res.json({id: curso.id});
});


export default cursosRouter;