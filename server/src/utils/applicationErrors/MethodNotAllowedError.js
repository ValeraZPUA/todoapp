import ApplicationError from "./ApplicationError.js";
class MethodNotAllowedError extends ApplicationError{
    constructor(message) {
        super(message || 'The bad request 405',405);
    }
}
export default MethodNotAllowedError;