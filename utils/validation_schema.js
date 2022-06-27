const Joi = require('joi')
const { schema } = require('../models/User')

const authSchema = joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase().required(),
    password: Joi.string().min(6).required(),
})

schema.validate({});

module.exports = {
    authSchema,
}