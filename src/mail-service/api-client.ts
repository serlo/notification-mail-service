import { GraphQLClient } from 'graphql-request'

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
