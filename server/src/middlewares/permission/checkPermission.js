import appErrors from '../../utils/applicationErrors'

export  default (entity) => {
    return(action) => {
        return(req, res, next) => {
            try {
                next(new appErrors.ForbittenError())
            } catch (e) {
                next(e)
            }
        }
    }
}