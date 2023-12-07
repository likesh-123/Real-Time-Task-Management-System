const subscribeClient = require('./client/subcribe-client');

// subscribers
const taskNotificationSubscribers = require('../channels/task-Notification');

const subscribeChannel = async () => {
  subscribeClient.subscribe("taskNotification", (err, count) => {
    if (err) {
      console.error("Failed to subscribe: %s", err.message);
    } else {
      console.log(`Subscribed successfully! This client is currently subscribed to ${count} channels.`);
    }
  });

  // Real-Time Notifications using Redis
  subscribeClient.on('message', (channel, message) => {

    // call the specific subcribers depending on the channel
    if (channel === 'taskNotification')
      taskNotificationSubscribers(message);
  });
}

module.exports = subscribeChannel