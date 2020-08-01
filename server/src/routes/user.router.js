import express from 'express';
import {createUser, updateUserByPk} from "../controllers/user";
import {validateUserOnUpdate} from "../middlewares/user/validateUser";
const userRouter = express.Router();
//userRouter.post('/', createUser);
userRouter.patch('/',validateUserOnUpdate, updateUserByPk);
export default userRouter;

