const verificarAutenticacion = ( req, res, next)=>{
    const authCookie= req.signedCookies[process.env.AUTH_COOKIE];
    if(!authCookie){
        res.status(401).json({
            status: 'fail',
            mensaje: 'Uusuario no autorizado'
        });
    }
    //indica que acabo la logica y que puede pasar a la siguiente cadena
    next();
}

export default verificarAutenticacion;