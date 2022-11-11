const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@configs': path.resolve(__dirname, 'src/configs/'),
      '@apis': path.resolve(__dirname, 'src/apis/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  jest: {
    transformIgnorePatterns: ['/node_modules/(rc-.+?|@babel/runtime).+(js|jsx)$'],
    configure: {
      moduleNameMapper: {
        '^@src(.*)$': '<rootDir>/src$1',
        '^@images(.*)$': '<rootDir>/src/assets/images$1',
        '^@configs(.*)$': '<rootDir>/src/configs$1',
        '^@apis(.*)$': '<rootDir>/src/apis$1',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
      },
    },
  },
};
