import ApplicationError from "./ApplicationError.js";
class NotFoundError extends ApplicationError{
    constructor(message) {
        super(message || 'The bad request 404',404);
    }
}
export default NotFoundError;