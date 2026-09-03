export class obtenerUsuarioDTO{
    constructor(data){
        this.id =  data._id,
        this.username = data.username;
        this.activo = data.activo;
        this.fechaRegistro = data.fechaRegistro;
    }
}