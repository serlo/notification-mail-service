import type { Config } from '@jest/types'

const jestConfig: Config.InitialOptions = {
  "preset": "ts-jest/presets/default-esm",
  "setupFiles": ["dotenv/config"],
  "setupFilesAfterEnv": ["<rootDir>/jest.setup.ts"],
  "testEnvironment": "node",
  "testPathIgnorePatterns": ["/node_modules/"]
}

export default jestConfig