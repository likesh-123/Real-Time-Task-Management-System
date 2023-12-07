const Task = require('../../models/task-model')
const mongoose = require('mongoose');
const client = require('../../redis/client/redis-client');

const gettask = async (req, res) => {
    try {
        const {
            userId,
            taskId
        } = req.query;

        const queries = {};

        if (userId) queries.userId = mongoose.Types.ObjectId(userId);
        if (taskId) queries.taskId = mongoose.Types.ObjectId(taskId);

        let taskData;
        let cachedData = await client.get("taskData");

        if (cachedData) {
            taskData = JSON.parse(cachedData);
        }
        else {
            taskData = await Task.find(queries);
            await client.set("taskData", JSON.stringify(taskData));
        }

        res.status(200).json({ data: taskData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = gettask;