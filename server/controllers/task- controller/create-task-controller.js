const { validateTask } = require('../../validations/create-task-validation');
const Task = require('../../models/task-model');

const createTask = async (req, res) => {

    try {
        const {
            userId
        } = req.AUTH_USER_DATA;

        const {
            title,
            description,
            completionDate
        } = req.body;

        // Validate the user object using Joi
        const { error } = validateTask(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Create a new user
        // If we are created Task then userId, createdBy, assignedBy will be same
        const newTask = await new Task({
            title: title,
            description: description,
            userId: userId,
            createdBy: userId,
            assignedBy: userId,
            completedBy: new Date(completionDate).toISOString()
        }).save();

        console.log({ newTask });

        res.status(201).json({ message: 'Task created successfully', data: newTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = createTask;