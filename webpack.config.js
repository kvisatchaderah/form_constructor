const html_webpack_plugin = require('html-webpack-plugin')

// exports
module.exports = ({ dev, serve }) => {
  return {
    // mode
    mode: dev ? 'development' : 'production',

    // target
    target: ['browserslist'],

    // devtool
    devtool: dev ? 'eval-source-map' : undefined,

    // devServer
    devServer: serve
      ? {
          open: {
            app: {
              name: 'firefox',
              arguments: ['--new-window'],
            },
          },
          hot: false,
          port: 8080,
        }
      : undefined,

    // context
    context: __dirname + '/src',

    // entry
    entry: { app: './index.js' },

    // output
    output: {
      filename: '[name].js',
      clean: true,
      path: __dirname + '/dist',
      assetModuleFilename: '[name][ext]',
    },

    // module
    module: {
      // rules
      rules: [
        // js
        {
          test: /\.(mjs|js)$/i,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },

        // css
        {
          test: /\.sass$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('postcss-preset-env')],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: dev ? true : false,
              },
            },
          ],
        },
      ],
    },

    //plugins
    plugins: [
      new html_webpack_plugin({
        template: __dirname + '/src/index.html',
      }),
    ],
  }
}
