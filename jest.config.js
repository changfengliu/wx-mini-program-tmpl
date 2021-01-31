module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'https://jest.test',
  moduleFileExtensions: ['js'],
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin']
}