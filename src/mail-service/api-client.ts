import { GraphQLClient, RequestDocument, Variables } from 'graphql-request'

import { AbstractNotificationEvent } from '../gql/graphql'

export interface ApiClient {
  // TODO: Types anpassen
  fetch(query: RequestDocument, variables: Variables): Promise<Answer>
}

export class ApiGraphqlClient implements ApiClient {
  client: GraphQLClient

  constructor(apiGraphqlUrl: string) {
    this.client = new GraphQLClient(apiGraphqlUrl)
  }

  async fetch(query: RequestDocument, variables: Variables): Promise<Answer> {
    return this.client.request(query, variables)
  }
}

export interface Answer {
  nodes: Node[]
}

export interface Node {
  id: number
  event: AbstractNotificationEvent
}
