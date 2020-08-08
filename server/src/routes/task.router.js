import express from 'express';
import createValidationMW from "../middlewares/validation/createValidationMW";
import schemas from '../utils/validation';
import * as TaskController from '../controllers/task.js'
import checkPermission from "../middlewares/permission/checkPermission";
import { ACTION, ENTITY } from "../constrains";
const taskRouter = express.Router();
const checkTask = checkPermission(ENTITY.TASK)

taskRouter.post('/', checkPermission(ACTION.CREATE),createValidationMW(schemas.taskSchema)(), TaskController.createTask);
taskRouter.get('/:taskId', checkPermission(ACTION.READ), TaskController.getTask);
taskRouter.patch('/:taskId', checkPermission(ACTION.UPDATE), createValidationMW(schemas.taskSchema)(ACTION.UPDATE), TaskController.updateTask);
taskRouter.delete('/:taskId', checkPermission(ACTION.DELETE), TaskController.deleteTask);

export default taskRouter;