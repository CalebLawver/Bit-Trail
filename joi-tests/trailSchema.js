const joi = require('joi');

const trailSchema = joi.object({
    tname: joi.string().min(3).max(25),
    address: joi.string(),
    miles: joi.number(),
    kilometers: joi.number(),
    difficulty: joi.string(),
    blurb: joi.string().min(3).max(300),
})

module.exports = trailSchema;