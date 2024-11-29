const jsonServer = require('json-server')
const Server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

Server.use(middlewares)
Server.use(router)
Server.listen(4000, () => {
  console.log('JSON Server is running')
})
