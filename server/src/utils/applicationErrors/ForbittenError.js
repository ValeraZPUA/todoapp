import ApplicationError from "./ApplicationError.js";
class ForbittenError extends ApplicationError{
    constructor(message) {
        super(message || 'The bad request 403',403);
    }
}
export default ForbittenError;