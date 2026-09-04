import { MongoClient } from "mongodb";
export const client = new MongoClient(process.env.DB_URI);

export const pool = async()=>{
    try{
        await client.connect();
        console.log('Conectando con la base de datos...');
        return client.db(process.env.DB_NAME);
    }
    catch(error){
        console.log(`Error tratar de conectarse con la base de datos ${process.env.DB_NAME}`);
        throw error;
    }
}