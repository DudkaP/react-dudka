import Joi from "joi";

Joi.object({
    model:Joi.string().min(2).max(20).required().messages({
        'string.empty':'стринг не может быть пустым',
        'string.min':'минимум 2 символа'
    })
})