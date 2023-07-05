import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    confirmPassword:  Joi.string().min(3).required()
})

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
})

export const transactionSchema = Joi.object({
    value: Joi.number().precision(2).required(),
    description: Joi.string().required(),
    date: Joi.date().format('DD-MM').required()
})