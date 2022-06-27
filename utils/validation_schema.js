const Joi = require('joi')
const { schema } = require('../models/User')

const authSchema = joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required(),
})

schema.validate({});

module.exports = {
    authSchema,
}