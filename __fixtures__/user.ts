import { User } from '../src/gql/graphql'

export const user: User = {
  __typename: 'User',
  id: 1,
  trashed: false,
  alias: '/user/1/admin',
  username: 'alpha',
  date: '2014-03-01T20:36:21Z',
  lastLogin: '2020-03-24T09:40:55Z',
  description: null,
  events: {
    edges: [],
    nodes: [],
    pageInfo: {
      hasNextPage: false,
    },
  },
  activityByType: {
    comments: 1,
    edits: 2,
    reviews: 3,
    taxonomy: 1,
  },
  eventsByUser: {
    edges: [],
    nodes: [],
    pageInfo: {
      hasNextPage: false,
    },
  },
  isActiveDonor: false,
  isActiveReviewer: true,
  isNewAuthor: false,
  unrevisedEntities: {
    edges: [],
    nodes: [],
    pageInfo: {
      hasNextPage: false,
    },
    totalCount: 0,
  },
  imageUrl: '',
  isActiveAuthor: true,
  title: 'alpha',
  threads: {
    edges: [],
    nodes: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
    totalCount: 0,
  },
  roles: {
    edges: [],
    nodes: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
    totalCount: 0,
  },
}
