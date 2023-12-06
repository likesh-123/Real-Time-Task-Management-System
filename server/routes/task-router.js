const express = require('express');
let taskRouter = express.Router();

// import controllers
const createTask = require('../controllers/taskController/create-task-controller');
const getTask = require('../controllers/taskController/get-task-controller');
const getAllUser = require('../controllers/user-controller/get-all-users');
const updateTask = require('../controllers/taskController/update-task-controller');

// Different endpoints
taskRouter.post('/task/create-task', createTask);
taskRouter.get('/task/get-task', getTask);
taskRouter.patch('/task/update-task/:taskId', updateTask);
taskRouter.get('/get-all-user', getAllUser);

module.exports = taskRouter;

