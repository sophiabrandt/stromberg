import jsonServer from './app/server'

const port = process.env.port || 3333

jsonServer.on('error', console.error)

jsonServer.listen(port, () => {
  console.info(`🚀 JSON server is running on http://localhost:${port}`)
})
