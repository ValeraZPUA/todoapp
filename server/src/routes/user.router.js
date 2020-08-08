import express from 'express';
import {createUser, updateUserByPk, deleteUserByPk, getUserByPk} from "../controllers/user.js";
import createValidationMW from "../middlewares/validation/createValidationMW";
import schemas from '../utils/validation';
import checkPermission from "../middlewares/permission/checkPermission";
import { ACTION, ENTITY } from "../constrains";
const checkTask = checkPermission(ENTITY.USER)
const userRouter = express.Router();
userRouter.post('/', checkPermission(ACTION.CREATE), createValidationMW(schemas.userSchema)(ACTION.CREATE), createUser);
userRouter.patch('/:userId', checkPermission(ACTION.UPDATE), createValidationMW(schemas.userSchema)(ACTION.UPDATE), updateUserByPk);
userRouter.get('/:userId', checkPermission(ACTION.READ), getUserByPk);
userRouter.delete('/:userId', checkPermission(ACTION.DELETE), deleteUserByPk);
export default userRouter;

