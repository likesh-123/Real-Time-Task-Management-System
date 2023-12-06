const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },   // this will hold the current userId
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },   // this will hold the userId by whom the task was created
    assignedBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },   // this will hold the userId by whom the task was assigned
    status: { type: String, enum: ["pending", "inProgress", "completed"], default: "pending" },
    completedBy: { type: Date, required: true },
    completedOn: { type: Date, default: null },
}, { versionKey: false, timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;