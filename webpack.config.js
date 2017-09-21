const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    library: "GraphicatorLib"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
    //another way to define loader
    // ,loaders: [
    //   // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
    //   { test: /\.ts$/, loader: "ts-loader" }
    // ],
  }
};
