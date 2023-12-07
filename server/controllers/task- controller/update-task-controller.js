const Task = require('../../models/task-model');

const updateTask = async (req, res) => {

    try {

        const taskId = req.params.taskId;

        const status = req.body.status;
        if (status) {
            if (!(status === 'pending' || status === 'inprogress' || status === 'completed'))
                return res.status(400).json({ error: "Invalid status" });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            req.body,
            { new: true }
        );

        console.log({ updatedTask });

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = updateTask;