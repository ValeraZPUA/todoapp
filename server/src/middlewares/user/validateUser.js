import userSchema from '../../utils/validation/user';
function createUserValidationMV(isCreateMode=true) {
    return async(req,res,next) => {
    try {
        req.body = await userSchema.validateAsync(req.body, {
            context: {
                isCreateMode: true,
            }
        });
        next();
    } catch(e){ next(e); }}}
    export const validateUserOnCreate = createUserValidationMV();
export const validateUserOnUpdate = createUserValidationMV(false);