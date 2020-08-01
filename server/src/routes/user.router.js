import express from 'express';
import {createUser, updateUserByPk, deleteUserByPk, getUserByPk} from "../controllers/user";
import {validateUserOnUpdate, validateUserOnCreate} from "../middlewares/user/validateUser";
const userRouter = express.Router();
//userRouter.post('/', createUser);
userRouter.patch('/:userId',validateUserOnUpdate, updateUserByPk);
userRouter.get('/:userId',getUserByPk);
userRouter.delete('/:userId',deleteUserByPk);
export default userRouter;

