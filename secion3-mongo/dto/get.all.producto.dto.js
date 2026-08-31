export default class GetAllProductoDTO{
    id;
    codigo;
    nombre;
    precio;
    activo;

    constructor(data){
        this.id =  data._id
        this.codigo = data.codigo;
        this.nombre = data.nombre;
        this.precio = data.precio;
        this.activo = data.activo;
    }
}