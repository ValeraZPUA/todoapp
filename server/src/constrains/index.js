export const NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;
export const LOGIN_PATTERN = /^(?!.*?[ \\/\[\]:;|=,+*?<>]).{6,15}$/;
export const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,60}$/;
export const ACTION = {
    CREATE: Symbol('CREATE'),
    READ: Symbol('READ'),
    UPDATE: Symbol('UPDATE'),
    DELETE: Symbol('DELETE')
};
export const ENTITY = {
    USER: Symbol('USER'),
    TASK: Symbol('TASK')
};
export const ROLE = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR'
}