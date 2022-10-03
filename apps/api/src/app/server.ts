import { bodyParser, create, defaults, router } from 'json-server'
import db from './db.json'

const jsonServer = create()
const jsonMiddlewares = defaults()
const jsonRouter = router(db)

jsonServer.use(jsonMiddlewares)
jsonServer.use(bodyParser)

jsonServer.use((req, res, next) => {
  // authorization logic
  next()
})

jsonServer.use(jsonRouter)

export default jsonServer
