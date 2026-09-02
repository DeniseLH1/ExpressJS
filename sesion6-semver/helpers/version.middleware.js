import semver from 'semver';

export const versionMiddleware = (version)=>{
    return function (req,res,next){
        if(req.headers['x-version']){
            if(semver.get(req.headers['x-version'],version)){
                return next();
            }
            return next('route');
        }
        else{
            return next('route');
        }
    }
}