import express from 'express'
import * as t from 'io-ts'

import { apiReponses } from '../__fixtures__/api-responses'

const api = express()
api.use(express.json())

api.post('/graphql', (req, res) => {
  if (!t.type({ variables: t.type({ userId: t.number }) }).is(req.body)) {
    res.sendStatus(400)
    return
  }

  const data = apiReponses[req.body.variables.userId]

  if (data != null) {
    res.json({ data })
  } else {
    res.sendStatus(400)
  }
})

api.listen(3003)
