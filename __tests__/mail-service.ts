import assert from 'assert'
import { filterDataForEmail } from '../src/mail-service/mail-service'

const actualResponse = filterDataForEmail([
  {
    user_id: 1,
    username: 'user',
    email: 'email@serlo.org',
    event_id: 2,
    date: new Date('2022-10-11 11:30'),
    actor_name: 'actor',
    id: '3',
    ids: [],
    body: '',
  },
])

const expectedResponse = [
  {
    user_id: 1,
    username: 'user',
    email: 'email@serlo.org',
    ids: ['3'],
    body: '<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/>',
  },
]

assert.deepEqual(actualResponse, expectedResponse)
