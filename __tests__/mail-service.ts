import assert from 'assert'

import { filterDataForEmail } from '../src/mail-service'

const actualResponse = filterDataForEmail([
  {
    user_id: 1,
    username: 'user',
    email: 'email@serlo.org',
    event_ids: '2,2',
    dates: '2022-10-11 11:30,2022-10-11 11:50',
    actor_names: 'actor,actor2',
    notification_ids: '12,3',
  },
])

const expectedResponse = [
  {
    user_id: 1,
    username: 'user',
    email: 'email@serlo.org',
    ids: ['12','3'],
    body: '<p>actor created taxonomy term on  created 2022-10-11 11:30</p><br/><p>actor2 created taxonomy term on  created 2022-10-11 11:50</p><br/>',
  },
]
test('filterDataForEmail gives expected response', () => {
  assert.deepEqual(actualResponse, expectedResponse)
})
