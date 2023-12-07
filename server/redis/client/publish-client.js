const { Redis } = require('ioredis');

const publishClient = new Redis();

module.exports = publishClient;