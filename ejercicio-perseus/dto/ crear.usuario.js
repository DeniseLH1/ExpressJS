export class CrearUsuarioDTO {
    constructor(data){
        this.username = data.username;
        this.password = data.password;
        this.activo = data.activo;
        this.fechaRegistro = data.fechaRegistro;
    }
}