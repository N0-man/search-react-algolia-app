const path = require('path');

//passing env from package.json Build:dev or Build:prod
module.exports = (env) => {
  const isProduction = env === 'production';
  
  return {
    entry: [
//had to explicitly add webpack-dev-server along with port in order to get rid of "sockjs-node ERR_CONNECTION_REFUSED" error in console logs
      "webpack-dev-server/client?http://localhost:8080",
      path.resolve(__dirname, 'src/app.js')
    ],
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
      contentBase: path.join(__dirname, 'public'),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    }
  }
}
