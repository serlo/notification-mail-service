// eslint-disable-next-line import/no-commonjs
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
}
