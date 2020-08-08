import { ACTION } from "../../constrains";

export default function createValidationMW(schema) {
    return (action = ACTION.CREATE) => {
        return async (req, res, next) => {
            try {
                req.body = await schema.validateAsync(req.body, {
                    context: {
                        isCreateMode: action === ACTION.CREATE,
                    }
                });
                next();
            } catch (e) {
                next(e);
            }
        };
    };
}
