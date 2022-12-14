import { GraphQLClient, RequestDocument, Variables } from 'graphql-request'

import { AbstractNotificationEvent } from '../gql/graphql'

export interface ApiClient {
  fetch: GraphQLClient['request']
}

export class ApiGraphqlClient implements ApiClient {
  fetch: GraphQLClient['request']

  constructor(apiGraphqlUrl: string) {
    const client = new GraphQLClient(apiGraphqlUrl)

    this.fetch = client.request.bind(client)
  }
}

export interface Answer {
  nodes: Node[]
}

export interface Node {
  id: number
  event: AbstractNotificationEvent
}
