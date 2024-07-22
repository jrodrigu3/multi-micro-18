const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  name: 'payment',

  exposes: {
    './MainComponent': './src/app/products/products.module.ts',
    './SharedDataState': './src/app/reducers/index.ts',  // Asegúrate de que este camino es correcto
    './SharedDataActions': './src/app/actions/shared-data.actions.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
moduleFederationConfig.output.publicPath = "http://localhost:4201/";
module.exports = moduleFederationConfig;
