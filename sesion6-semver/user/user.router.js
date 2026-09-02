import express from 'express';

import { versionMiddleware } from '../helpers/version.middleware.js';
import {getUser} from './get-user.handler.js'

// permite que las rutas hijas de la ruta se pueda usar respons
const userRouter =  express.Router({mergeParams: true });

userRouter.get('/', versionMiddleware('3.0.0'),getUser.V3);
userRouter.get('/', versionMiddleware('2.0.0'),getUser.V2);
userRouter.get('/', versionMiddleware('1.2.1-alpha.1'),getUser.alpha_1);
userRouter.get('/',versionMiddleware('1.5.2-beta.2'),getUser.beta_2);
userRouter.get('/', versionMiddleware('1.0.0'),getUser.V1);
userRouter.get('{/:data1}{/:data2}{/:data3}{/:data4}{/:data5}',getUser.V1)

export default userRouter;