// eslint-disable-next-line import/no-commonjs
module.exports = {
  overwrite: true,
  schema: 'https://api.serlo-staging.dev/graphql',
  emitLegacyCommonJSImports: true,
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
