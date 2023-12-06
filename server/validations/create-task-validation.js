const Joi = require('joi');

// Define a validation schema for a user
const taskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    completionDate: Joi.number().required(),
});

module.exports = {
    validateTask: (task) => taskSchema.validate(task),
};
