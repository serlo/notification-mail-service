import {User} from "../src/gql/graphql";

export const user: User = {
  __typename: "User",
  id: 1,
  trashed: false,
  alias: '/user/1/admin',
  username: 'alpha',
  date: '2014-03-01T20:36:21Z',
  lastLogin: '2020-03-24T09:40:55Z',
  description: null,
  roles: ['login', 'german_horizonhelper', 'sysadmin'],
}