import express from 'express';
import userRouter  from './user.router.js';
import errorHandler from '../middlewares/errorHandlers/ApplicationError';
//import { createUser } from '../controllers/user';
//import {validateUserOnCreate, validateUserOnUpdate} from "../middlewares/user/validateUser";
import AppErrors from '../utils/applicationErrors';
import checkUserAuth from "../middlewares/authorization/checkUserAuth";
const router = express.Router();
router.use(checkUserAuth);
router.use('/user',userRouter);
router.use('/*',function (req,res,next) {
    next(new AppErrors.NotFoundError());

});
//router.use(errorHandler);
export default router;
