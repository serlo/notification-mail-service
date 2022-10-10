import express from 'express'
import config from './config/config'
import indexRouter from './routes'

const app = express()
app.use(express.json())
app.use('/', indexRouter)

const port = config.api.port || 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
