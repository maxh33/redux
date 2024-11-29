const jsonServer = require('json-server')
const Server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, '...', 'db.json'))
const middlewares = jsonServer.defaults()

Server.use(middlewares)
Server.use(router)

module.exports = Server
