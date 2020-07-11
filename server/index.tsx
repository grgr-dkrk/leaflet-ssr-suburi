import * as express from 'express'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { App } from '../src/app'
import { ServerLayout } from './ServerLayout'

const app = express()

app.use(express.static('public'))
app.use(express.Router())

const router = express.Router()

router.get('*', (req, res) => {
  res.send(ServerLayout(ReactDOMServer.renderToString(<App />)))
})

app.use('/', router)

app.listen(3000, () =>
  console.log('listening on port \x1b[36mhttp://localhost:3000\u001b[0m'),
)
