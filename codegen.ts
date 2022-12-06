import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.serlo-staging.dev/graphql',
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

// TODO: Better way to implement this?!
// eslint-disable-next-line import/no-default-export
export default config
