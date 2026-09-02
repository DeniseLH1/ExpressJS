import express, { application } from 'express';
import semver from 'semver';

const app = express();

//creacion de endpoint llamado version a traves de query params 
app.get('/version',(req,res)=>{
    const appVersion ='1.0.0';
    const clientVersion = req.query.v;
    if(!clientVersion){
        return res.status(400).json({error:'Debe proporsionar la versión.'});
    }
    if(semver.satisfies(clientVersion, `>=${appVersion}`)){
        return res.status(200).json({mensaje: `La version ${clientVersion} es compatible con la versión de la APP.`})
    }
    else{
        return res.status(400).json({error: `La versión ${clientVersion} no es compatible socn la versión de la APP.`})
    }
})

app.listen(3000, ()=>{
    console.log(`Semver corriendo en http//:localhost:3000`)
})