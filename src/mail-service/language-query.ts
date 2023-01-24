import { graphql } from '../gql'

export const getUserLanguage = graphql(`
  query getUserLanguage($userId: Int!) {
    uuid(id: $userId) {
      __typename
      ... on User {
        language
      }
    }
  }
`)
