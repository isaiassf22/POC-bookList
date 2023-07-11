import Joi, { string } from "joi";

export const AuthSchema= Joi.object({
    user:Joi.string().max(15).required(),
    email:Joi.string().max(25).required(),
    password: Joi.string().max(15).required(),
    confirmPassword: Joi.ref('password')
})



export type signUp = {
    user: string,
    email: string,
    password: string
    confirmPassword: string
}

export type signIn ={
    user: string,
    password: string
}