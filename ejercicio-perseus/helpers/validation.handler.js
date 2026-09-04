import { validationResult } from 'express-validator';

export function validatorHandler( req, res, next ){
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    const err = new Error('Errores de validación');
    err.statusCode = 400;
    err.details = errors.array();
    return next(err);
  }
  next();
} 