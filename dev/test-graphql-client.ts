import { gql } from 'graphql-request'

import { ApiGraphqlClient } from '../src/mail-service/graphql-client'

const client = new ApiGraphqlClient('https://api.serlo-staging.dev/graphql')

void client
  .fetch(
    gql`
      {
        uuid(id: 1) {
          title
        }
      }
    `
  )
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

void client
  .fetch(
    gql`
      query TestUuidQuery($id: Int) {
        uuid(id: $id) {
          title
        }
      }
    `,
    JSON.stringify({ id: 2 })
  )
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
