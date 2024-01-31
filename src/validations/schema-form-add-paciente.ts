import Joi from "joi";

export const schemaFormAddPaciente = Joi.object({
    mascota: Joi.string()
    .max(20)
    .min(3)
    .required()
    .messages({
        "string.max": "La longitud del nombre de la mascota es demasiado grande",
        "string.min" : "La longitud del nombre de la mascota es muy corto",
        "any.required" : "Debe ingresar el nombre de la mascota"       
    }),
    duenio: Joi.string()
    .max(20)
    .min(3)
    .required()
    .messages({
        "string.max": "La longitud del nombre del dueño es demasiado grande",
        "string.min" : "La longitud del nombre del dueño es muy corto",
        "any.required" : "Debe ingresar el nombre del dueño"       
    }),
    raza: Joi.string()
    .max(20)
    .required()
    .messages({
        "string.max": "La longitud del nombre de la raza es demasiado grande",
        "string.min" : "La longitud del nombre de la raza es muy corto",
        "any.required" : "Debe ingresar el nombre de la raza"       
    }),
    email: Joi.string()
    .required()
    .email({tlds:false})
    .messages({
        "any.required" : "Debe ingresar el email",
        "string.email" : "El formato del email es incorrecto"       
    }),
})