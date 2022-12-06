import { GraphQLClient, RequestDocument, Variables } from 'graphql-request'

export interface ApiClient {
  // TODO: Types anpassen
  fetch(x: unknown): Promise<unknown>
}

export class ApiGraphqlClient implements ApiClient {
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
  }) {
    return this.client.request(query, variables)
  }
}
