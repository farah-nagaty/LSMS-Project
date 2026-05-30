const Joi = require("joi");
const joi = require("joi");

const registerSchema = Joi.object({
    name: Joi.string().trim().min(2).max(50).required().messages({ 'any.required': 'Name is required' }),
    email: Joi.string().email().lowercase().required().messages({ 'string.email': 'Please enter a valid email' }),
    password: Joi.string().min(8).required().messages({ 'string.min': 'Password must be at least 8 characters' }),
    role: Joi.string().valid('superadmin', 'manager').required().messages({ 'any.only': 'Role must be superadmin or manager' }),
    schoolId: Joi.string().optional().allow(null, ''),

});

module.exports = { registerSchema };