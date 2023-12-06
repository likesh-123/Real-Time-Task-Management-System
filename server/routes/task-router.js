const express = require('express');
let taskRouter = express.Router();

// import controllers
const createTask = require('../controllers/taskController/create-task-controller');
const getTask = require('../controllers/taskController/get-task-controller');

// Different endpoints
taskRouter.post('/task/create-task', createTask);
taskRouter.get('/task/get-task', getTask);

module.exports = taskRouter;

