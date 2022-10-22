import { bodyParser, create, defaults, rewriter, router } from 'json-server'
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

jsonServer.get('/error/500', (req, res) => {
  res.status(500).jsonp({
    message: 'Internal Server Error',
  })
})

jsonServer.get('/error/404', (req, res) => {
  res.status(404).jsonp({
    message: 'Not Found',
  })
})

jsonServer.use('/api', jsonRouter)

export default jsonServer
