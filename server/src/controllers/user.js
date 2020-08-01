const {User} = require('./../db/models');

const controllersUser =async function createUser(req,res,next) {
    try{
        const createdUser = await User.create(req.body);
        if (createdUser){
            return res.status(201).send(createdUser);
        }
       //res.status(400).send('Bad Request!');
        return next(new Error());
    } catch (e) {
        next(e);
    }
};
module.exports = controllersUser;