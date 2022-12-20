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

// TODO: Better way to implement this?!
// eslint-disable-next-line import/no-default-export
export default config
