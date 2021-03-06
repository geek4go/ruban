
module.exports = function () {
  return {
    babelrc: false,
    presets: [
      require.resolve('babel-preset-es2015'),
      require.resolve('babel-preset-react'),
      require.resolve('babel-preset-stage-0')
    ],
    plugins: [
      require.resolve('babel-plugin-add-module-exports'),
      require.resolve('babel-plugin-transform-runtime')
    ]
  };
};
