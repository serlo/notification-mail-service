import assert from 'assert'
import { gql } from 'graphql-request'

import { ApiGraphqlClient } from '../src/mail-service/api-client'

const client = new ApiGraphqlClient('https://api.serlo-staging.dev/graphql')

void client
  .fetch({
    query: gql`
      {
        uuid(id: 1) {
          title
        }
      }
    `,
  })
  .then((data) => {
    assert.deepEqual(data, { uuid: { title: 'arekkas' } })
  })

void client
  .fetch({
    query: gql`
      query TestUuidQuery($id: Int) {
        uuid(id: $id) {
          title
        }
      }
    `,
    variables: { id: 2 },
  })
  .then((data) => {
    assert.deepEqual(data, { uuid: { title: 'devuser' } })
  })
