import AppErrors from '../../utils/applicationErrors';
export default function (req, res, next) {
    try{
        const authorUserId = req.get('Authorization');
        req.authorizationData = authorUserId ? {id: authorUserId} : false;
        if(req.authorizationData) {
            next();
        }else {
            next(new AppErrors.UnauthorizedError());
        }
    } catch(e){
        next(e);
    }
}

