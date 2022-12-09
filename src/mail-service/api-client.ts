import { GraphQLClient, RequestDocument, Variables } from 'graphql-request'

import { AbstractNotificationEvent } from '../gql/graphql'

export interface ApiClient {
  // TODO: Types anpassen
  fetch(x: { RequestDocument; Variables }): Promise<any>
}

export class ApiGraphqlClient /*implements ApiClient*/ {
  client: GraphQLClient

  constructor(apiGraphqlUrl: string) {
    this.client = new GraphQLClient(apiGraphqlUrl)
  }

  async fetch({
    query,
    variables,
  }: {
    query: RequestDocument
    variables?: Variables | undefined
  }): Promise<Answer> {
    return this.client.request(query, variables)
  }
}

interface Answer {
  nodes: Node
}

export interface Node {
  id: number
  event: AbstractNotificationEvent
}
