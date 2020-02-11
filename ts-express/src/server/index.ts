import Express from 'express'
import cors from 'cors'

const app = Express()
app.use(cors())

app.get('/api/health', (req, res) => {
  res.send({ message: 'pong' })
})

// Routeに一致しないRequest
// デフォルトではCannot Getのエラーページが返る
app.use((req, res, next) => {
  res.sendStatus(404)
  next({ statusCode: 404 })
})

// Error Route
app.use(
  (
    err: { statusCode: number },
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    console.log(err.statusCode)
  }
)

const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`)
})