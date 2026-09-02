import { Router } from 'express';
import { body } from 'express-validator';
import { validatorHandler } from '../helpers/validation.handler';

const userRouter = Router();

const validarCreacion=[
    body('username')
        .notEmpty().withMessage('Nombre de usuario requerido')
        .isString().withMessage('El nombre de usuario debe ser texto')
        .isLenght(3).withMessage('El nombre de usuario debe contener minimo 3 caracteres.'),
    body('password')
        .notEmpty().withMessage('Contraseña requerida')
        .isStrongPassword().withMessage('La contraseña debe ser fuerte'),
    body('active')
        .isBoolean.withMessage('El campo activo debe ser booleano(true/false)'),
        validatorHandler
];

userRouter.get('/', (req, res)=>{
    res.send('Listando usuarios...')
});

userRouter.post('/', (req, res)=>{
    try{
        res.send('Creando usuario...')
    }
    catch(error){
        (error);
    }
    
});

export default userRouter;