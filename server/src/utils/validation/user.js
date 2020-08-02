import Joi from '@hapi/joi';
import {LOGIN_PATTERN, NAME_PATTERN, PASSWORD_PATTERN} from "../../constrains";

const nameSchema = Joi.string().pattern(NAME_PATTERN);
const emailSchema = Joi.string().email();
const  loginSchema = Joi.string().pattern(LOGIN_PATTERN);
const passwordSchema = Joi.string().pattern (PASSWORD_PATTERN);
export default Joi.object({
    firstName: nameSchema.label('First name').when('$isCreateMode', {
        then: nameSchema.required(),
    }),
    lastName: nameSchema.label('Last name').when('$isCreateMode', {
        then: nameSchema.required(),
    }),
    email: emailSchema.label('Email'),
    login: loginSchema.label('Login').when('$isCreateMode', {
        then: loginSchema.required(),
    }),
    password: passwordSchema.label('Password').when('$isCreateMode', {
        then: passwordSchema.required(),
    }),
}).min(1).max(5);
