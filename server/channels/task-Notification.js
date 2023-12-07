const handleTaskNotification = async (message) => {
    const payload = JSON.parse(message);

    const { event, taskId, assignedBy, status, userId } = payload;

    // Handle different events here
    switch (event) {
        case 'newTask':
            console.log(`New task created with ID: ${taskId} by user: ${assignedBy}`);
            // Send real-time notification to the user (or users) involved
            break;
        case 'taskStatusChange':
            console.log(`Task status changed for ID: ${taskId} to ${status} for user: ${userId}`);
            // Send real-time notification to the user (or users) involved
            break;
        default:
            break;
    }
}

module.exports = handleTaskNotification;