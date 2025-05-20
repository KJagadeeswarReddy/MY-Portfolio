module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JS/JSX files using babel-jest
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js" // Mock image imports
  }
};
