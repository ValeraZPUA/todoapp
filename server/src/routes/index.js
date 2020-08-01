import express from 'express';
import userRouter  from './user.router.js';
import errorHandler from '../middlewares/errorHandler';
import { createUser } from '../controllers/user';
import {validateUserOnCreate, validateUserOnUpdate} from "../middlewares/user/validateUser";

const router = express.Router();
userRouter.post('/',
    validateUserOnCreate,
    createUser
);
//router.use('/user',userRouter);
//router.use(errorHandler);
//module.exports = router;
export default router;
