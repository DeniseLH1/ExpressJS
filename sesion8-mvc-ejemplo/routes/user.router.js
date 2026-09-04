import { Router } from "express";

import {pool} from '../helpers/db.js';
import UserModel from "../models/user.model.js";
import UserController from "../controllers/user.controller.js";

const userRouter =  Router();
const db = await pool();
const userController =  new UserController(db,new UserModel(db));

userRouter.get('/',userController.getAll);
userRouter.get('/:id',userController.getById);
userRouter.post('/',userController.create);
userRouter.update('/:id',userController.update)
userRouter.delete('/:id', userController.delete)


export default userRouter;