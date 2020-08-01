import ApplicationError from "./ApplicationError.js";
class UnauthorizedError extends ApplicationError{
    constructor(message) {
        super(message || 'The bad request',401);
    }
}
export default UnauthorizedError;