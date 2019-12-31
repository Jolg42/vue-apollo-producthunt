module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],

  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(js|jsx)?$": "babel-jest"
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  snapshotSerializers: ["jest-serializer-vue"],

  // testMatch: [
  //   "<rootDir>/(tests/unit/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"
  // ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  preset: '@vue/cli-plugin-unit-jest'
};
