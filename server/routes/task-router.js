const express = require('express');
let taskRouter = express.Router();

// import controllers
const createTask = require('../controllers/taskController/create-task-controller');

// Different endpoints
taskRouter.post('/task/create-task', createTask);

module.exports = taskRouter;

