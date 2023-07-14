require('dotenv').config()

// eslint-disable-next-line import/no-commonjs
module.exports = {
  overwrite: true,
  schema: process.env.SERLO_API_GRAPHQL_URL,
  emitLegacyCommonJSImports: false,
  documents: 'src/**/*.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
