/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import { RequestDocument } from 'graphql-request'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  '\n    query getNotifications($userId: Int!) {\n      notifications(\n        first: 500\n        unread: true # FIXME / TODO #emailSent: false #emailSubscribed: true\n      ) #userId: $userId\n      {\n        nodes {\n          id\n          event {\n            __typename\n            date\n            actor {\n              username\n            }\n          }\n        }\n      }\n    }\n  ':
    types.GetNotificationsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query getNotifications($userId: Int!) {\n      notifications(\n        first: 500\n        unread: true # FIXME / TODO #emailSent: false #emailSubscribed: true\n      ) #userId: $userId\n      {\n        nodes {\n          id\n          event {\n            __typename\n            date\n            actor {\n              username\n            }\n          }\n        }\n      }\n    }\n  '
): typeof documents['\n    query getNotifications($userId: Int!) {\n      notifications(\n        first: 500\n        unread: true # FIXME / TODO #emailSent: false #emailSubscribed: true\n      ) #userId: $userId\n      {\n        nodes {\n          id\n          event {\n            __typename\n            date\n            actor {\n              username\n            }\n          }\n        }\n      }\n    }\n  ']

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): RequestDocument

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never