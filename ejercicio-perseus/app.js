import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import verficarAutenticacion from './utils/verficar-autenticacion.js';
import usuarioRouter from './routes/usuarios.router.js';
import { errorHandler } from './helpers/error.handler.js';
import loginRouter from './routes/login.router.js';

const app = express();

app.use(cookieParser(process.env.SECRET_KEY));
app.use(express.json());

app.use('/usuarios', verficarAutenticacion, usuarioRouter);
app.use('/login', loginRouter);

app.use(errorHandler);
app.listen(
  process.env.PORT,
  ()=> console.log(`Perseus is running on http://localhost:${process.env.PORT}`)
);