import type { CodegenConfig } from '@graphql-codegen/cli'

import { config as appConfig } from './src/config'

const config: CodegenConfig = {
  overwrite: true,
  schema: appConfig.serloApiGraphqlUrl,
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

// For @graphql-codegen/cli we actually need a default export here
// eslint-disable-next-line import/no-default-export
export default config
