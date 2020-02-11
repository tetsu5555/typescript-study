import Express from 'express'

const app = Express()

app.get('/', (req, res) => {
  const data = { message: 'pong' }
  res.send(data)
})

const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`)
})