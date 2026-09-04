const verificarAutenticacion = (req, res, next ) =>{
  const authCookie = req.signedCookies[process.env.AUTH_COOKIE];
  if(!authCookie){
    res.status(401).json({
      status: 'fail',
      mensaje: 'Usuario no autorizado.'
    });
  }
  else next();
}

export default verificarAutenticacion;