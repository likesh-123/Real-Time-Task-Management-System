const Task = require('../../models/task-model');
const publishClient = require('../../redis/client/publish-client');

const updateTask = async (req, res) => {

    try {

        const taskId = req.params.taskId;

        const {
            status,
            assignedBy,
            userId
        } = req.body;
        if (status) {
            if (!(status === 'pending' || status === 'inprogress' || status === 'completed'))
                return res.status(400).json({ error: "Invalid status" });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            req.body,
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        if (assignedBy && assignedBy !== userId) {
            // Notify about the new task assign to the user
            publishClient.publish('taskNotification', JSON.stringify({ event: 'newTask', taskId, assignedBy }));
        }
        if (status) {
            // Notify about the status change of the task to the user
            publishClient.publish('taskNotification', JSON.stringify({ event: 'taskStatusChange', taskId, userId: updatedTask.userId, status }));
        }

        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = updateTask;