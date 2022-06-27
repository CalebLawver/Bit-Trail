const joi = require('joi');

const userSchema = joi.object({
    username: joi.string().min(3).max(15).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
})

module.exports = userSchema;