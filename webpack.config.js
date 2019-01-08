const path = require('path');

//passing env from package.json Build:dev or Build:prod
module.exports = (env) => {
  const isProduction = env === 'production';
  
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },

    //source-map would preserve original source (important to dubug in production) but would lazy load (only when someone goes to devetool on browser) - hence reducing the size of output bundle.js
    //See webpack devtool for more info
    //Note: Webpack4 would minify the output by default in -p (prodcution mode)
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  }
}
