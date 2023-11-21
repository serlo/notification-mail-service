// eslint-disable-next-line import/no-commonjs
module.exports = {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true, isolatedModules: true }],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.mts'],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
}
