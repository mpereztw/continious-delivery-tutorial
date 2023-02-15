const serverless = require('serverless-http');
const server = require("./src/server")
const {app} = server()
module.exports.handler = serverless(app)