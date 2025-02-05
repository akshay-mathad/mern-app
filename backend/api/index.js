const serverless = require('serverless-http');
const app = require('../app'); // adjust the path if needed

module.exports = serverless(app);
