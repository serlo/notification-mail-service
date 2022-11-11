import { GraphQLClient, RequestDocument } from 'graphql-request'

export interface ApiClient {
  fetch(x: unknown): Promise<unknown>
}

export class ApiGraphqlClient implements ApiClient {
  apiGraphqlUrl: string

  constructor(apiGraphqlUrl: string) {
    this.apiGraphqlUrl = apiGraphqlUrl
  }

  async fetch(query: RequestDocument, variables?: string) {
    const client = new GraphQLClient(this.apiGraphqlUrl)

    return client.request(query, variables)
  }
}
