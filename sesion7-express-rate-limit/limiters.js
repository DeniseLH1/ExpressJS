import {rateLimit} from 'express-rate-limit';

const userLimitReq = rateLimit({
    windowMs: 300*1000,
    limit: 10,
    message: 'Ha alcanzado el limite de solicitudes para el recurso "user"'
});

const saleLimitReq = rateLimit({
    windowMs: 300*1000,
    limit: 30,
    message: 'Ha alcanzado el limite de solicitudes para el recurso "sale"'
});

export {saleLimitReq,userLimitReq}
