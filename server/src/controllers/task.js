import {Task} from './../db/models';
import AppErrors from '../utils/applicationErrors';

export async function createTask(req,res,next) {
    try{
        const {authorizationData: {id: userId}, body: taskData} = req;
        const createdTask = await Task.create(req.body);
        if (createdTask){
            return res.status(201).send(createdTask);
        }
        //res.status(400).send('Bad Request!');
        next ( new AppErrors.BadRequestError() );
    } catch (e) {
        next(e);
    }
}

export async function updateTask(req,res,next) {
    try{
        const { params: {taskId}, body: taskData} = req;
        const [RowsCount, Rows] = await Task.update(taskData,{
            where: {
                id: taskId,
            },
            returning: true,
        });
        if(RowsCount){
            return res.send(Rows[0]);
        }
        next(new AppErrors.NotFoundError('Task'));
    }catch(e){ next(e);}
}

export async function getTask(req,res,next) {
    try{
        const{params: {taskId}} = req;
        const foundTask = await Task.findByPk(taskId);
        if(foundTask) { return res.send(foundTask);}
        next(new AppErrors.NotFoundError('Task'));
    }catch(e){ next(e);}
}

export async function deleteTask(req,res,next) {
    try{
        const{params: {taskId}} = req;
        const deletedRowsCount = await Task.destroy({
            where: { id: req.params.taskId }
        } );
        if(deletedRowsCount) { res.send(`${deletedRowsCount}`)};
        next(new AppErrors.NotFoundError('Task'));
    }catch(e){ next(e);}
}