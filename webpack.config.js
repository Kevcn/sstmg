

module.exports = {
  entry: './src/index.js',

  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      }
    ]
  },

  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: "jquery",
  //     jQuery: "jquery"
  //   }),
  // ]

};
