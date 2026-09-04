import express from 'express';
import 'dotenv/config';
import useRouter from './routes/user.router.js'

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/user',useRouter)

app.listen(
    process.env.PORT,()=> console.log(`${process.env.APP_NAME} runnig on http://localhost:${process.env.PORT}`));