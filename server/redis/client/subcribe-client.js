const { Redis } = require('ioredis');

const subscribeClient = new Redis();

module.exports = subscribeClient;