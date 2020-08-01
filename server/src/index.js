/*
const {User} = require('./db/models');

//import {User} from './db/models';

const bcrypt = require('bcrypt');
const hashPassword = async password => {
    try{         return bcrypt.hash(password,10);     } catch (e){    }
}

const createUser = async data => {
    try{
        data.passwordHash = await hashPassword(data.password);
        const createdUser = await User.create(data);
        return createdUser.get();
    } catch(e){         throw e;     }
};

createUser(
    {
       firstName: 'Name',
       lastName: 'Surname',
       email: 'user111@mail.com',
       login: 'user111',
       password: 'dfsdfdsf'
    }
)
    .then(console.log)
    .catch(console.err);

*/
/*
const getUserById = async  id => {
    try{
        return (await User.findByPk(id)).get();

    }catch(e){
        throw e;
    }
};

getUserById(50)
    .then(console.log)
    .catch(console.error)
*/

/*
import { User, sequelize } from './db/models';
import { Model, DataTypes } from 'sequelize';
class Task extends Model{

}
task.init({
    value: {type: DataTypes.STRING},
    deadline: {type: DataTypes.DATE},
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
}, );
*/

import router from './routes';
//require('dotenv/config');
import express from 'express';
import cors from 'cors';
import applicationErrorHandler from './middlewares/ApplicationError.js'


//import { User } from './db/models';
//const port = process.env.PORT || 5000;
const port = 5001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(applicationErrorHandler);
app.use((err,req,res)=>{
    res.status(500).send('Internal server error!');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
/*
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/user', async (req, res, next) => {
    try{
        const createdUser = await User.create(req.body);
        return res.send(createdUser);
        //console.log(req.body) ;
    }catch(e){
        next(e);
    }
});
app.use((err,req,res) => {
    res.status(500).send('Smth broken ((((');
});
*/




