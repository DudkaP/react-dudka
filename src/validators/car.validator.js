import Joi from "joi";

export const carValidator = Joi.object({
    model:Joi.string().min(2).max(20).required().messages({
        'string.empty':'стринг не может быть пустым',
        'string.min':'минимум 2 символа'
    }),
    price:Joi.number().min(100).max(50000).required(),
    year:Joi.number().min(1960).max(new Date().getFullYear()).required()
});