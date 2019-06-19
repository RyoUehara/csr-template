module.exports = {
  "collectCoverageFrom": [
    "src/**/*.*"
  ],
  "coverageDirectory": "coverage",
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/dist/",
    "src/types/"
  ],
  "errorOnDeprecated": true,
  "globals": {
    "ts-jest": {
      "babelConfig": ".babelrc",
    }
  },
  "moduleNameMapper": {
    "^src(.*)$": "<rootDir>/src$1",
    "^\\$components(.*)$": "<rootDir>/src/components$1",
  },
  "notify": true,
  "preset": "ts-jest",
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  "testPathIgnorePatterns": [
    "/node_modules",
    "/dist/",
    "src/types/"
  ],
}
