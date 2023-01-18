import { graphql } from '../gql'

export const getUserLanguage = graphql(`
  query getUserLanguage($userId: Int!) {
    uuid(id: $userId) {
      ... on User {
        language
      }
    }
  }
`)
