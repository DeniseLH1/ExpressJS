export function errorHandler(err,req,res,next){
    res.status(err.statusCode || 500).json({
        status: 'fail',
        mensaje: err.mensaje || 'erros interno del servidor',
        errors: err.details
    })
}