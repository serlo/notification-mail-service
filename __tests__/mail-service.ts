import assert from 'assert'

import { filterDataForEmail } from '../src/mail-service'

const actualResponse = filterDataForEmail([
  {
    user_id: 1,
    username: 'user',
    email: 'email@serlo.org',
    event_ids: [2],
    dates: [new Date('2022-10-11 11:30')],
    actor_names: ['actor'],
    notification_ids: ['123'],
  },
])

const expectedResponse = [
  {
    user_id: 1,
    username: 'user',
    email: 'email@serlo.org',
    ids: ['123'],
    body: '<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/>',
  },
]
test('filterDataForEmail gives expected response', () => {
  assert.deepEqual(actualResponse, expectedResponse)
})
