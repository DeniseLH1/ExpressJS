export default class UserModel{
    //indicamos que aqui se guardara la conexion a la base de datos # es para un elemento privado se usa dentro de la clase
    #userColl;
    constructor(db){
        this.#userColl = db.collection('users');
    }
    async findAll(){
        return await this.#userColl.find().toArray();
    }
    async create(user){
        return await this.#userColl.insertOne(user);
    }
    async update(_id,updateData){
        return await this.#userColl.updateONde({_id},{$set: updateData});
    }
    async delete(_id){
        return await this.#userColl.deleteONe({_id})
    }
}