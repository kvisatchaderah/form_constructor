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
              arguments: ['--new-tab'],
            },
          },
          hot: false,
          port: 8080,
        }
      : undefined,

    // entry
    entry: { app: './src/index.js' },

    // output
    output: {
      filename: dev ? '[name].js' : '[name][hash].js',
      clean: true,
      path: __dirname + '/dist',
      assetModuleFilename: dev ? '[name][ext]' : '[name][hash][ext]',
    },

    resolve: {
      alias: {
        // assets
        '@assets': __dirname + '/src/constructor_form/assets/_assets',
        '@m_assets': __dirname + '/src/constructor_form/model/assets/_assets',
        '@v_assets': __dirname + '/src/constructor_form/view/assets/_assets',
        '@c_assets':
          __dirname + '/src/constructor_form/controller/assets/_assets',

        // styles
        '@styles': __dirname + '/src/constructor_form/styles',

        // helpers
        '@helpers': __dirname + '/src/constructor_form/helpers/_helpers',
        '@m_helpers':
          __dirname + '/src/constructor_form/model/helpers/_helpers',
        '@v_helpers': __dirname + '/src/constructor_form/view/helpers/_helpers',
        '@c_helpers':
          __dirname + '/src/constructor_form/controller/helpers/_helpers',
      },
    },

    // module
    module: {
      // rules
      rules: [
        // js
        {
          test: /\.(mjs|js)$/i,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
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
