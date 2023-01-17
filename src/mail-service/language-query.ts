import { gql } from 'graphql-request'

import { graphql } from '../gql'

export const getUserLanguageQuery = graphql(`
  query getUserLanguageQuery($userId: Int!) {
    uuid(d: $userId) {
      ... on User {
        language
      }
  }
`)
