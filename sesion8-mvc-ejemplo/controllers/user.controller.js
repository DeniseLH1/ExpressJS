//importación del modelo
import UserModel from "../models/user.model.js";

export default class UserController{
    //instancia del modelo en el controlador
    #userModel;

    constructor(model){
        this.UserModel=model;
        //la asyncronia pierde acceso al hilo original para que tenga acceso se usa un banding 
        this.getAll =  this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    async getAll(req,res){
        const users= await this.#userModel.findAll();
        res.json(users);
    }

    async getById(req,res){
        const user = await this.#userModel.create(req.body);
        res.json({id: user.insertedId});
    }

    async update(req,res){
        const result = await this.#userModel.update(req.params.id,req.body);
        res.json(result);
    }

    async delete(req,res){
        const result = await this.#userModel.delete(req.params.id);
        res.json(result);
    }
}
