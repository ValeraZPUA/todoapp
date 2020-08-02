import express from 'express';
import {createUser, updateUserByPk, deleteUserByPk, getUserByPk} from "../controllers/user.js";
//import {validateUserOnUpdate, validateUserOnCreate} from "../middlewares/user/validateUser.js";
import createValidationMW from "../middlewares/validation/createValidationMW";
import schemas from '../utils/validation';
const userRouter = express.Router();
userRouter.post('/', createValidationMW(schemas.userSchema)(), createUser);
userRouter.patch('/:userId',createValidationMW(schemas.userSchema)(false), updateUserByPk);
userRouter.get('/:userId',getUserByPk);
userRouter.delete('/:userId',deleteUserByPk);
export default userRouter;

