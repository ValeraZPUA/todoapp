/*
export default function (err,req,res,next) {
    return res.status(500).send('Internal Server Error!');
};

*/
import ApplicationError from "../../utils/applicationErrors/ApplicationError.js";
export default function (err, req, res, next) {
    if(err instanceof  ApplicationError){
        return res.status(err.status).send(err.message);
    } else{
        next(err);
    }
}
