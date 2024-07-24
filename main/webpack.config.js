const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const path = require('path');
const fs = require('fs');

const pathToEnv = (env) => {
  switch (env) {
    case 'production':
      return './src/environments/environment.env.json';
    case 'development':
      return './src/environments/environment.development.env.json';
    default:
      return './src/environments/environment.development.env.json';
  }
};

// Cargar configuración de entorno
const environmentPath = pathToEnv(process.env.NODE_ENV);
const environment = JSON.parse(fs.readFileSync(environmentPath, 'utf8'));

const moduleFederationConfig = withModuleFederationPlugin({
  remotes: {
    "payment": `${environment.remotes.payment}remoteEntry.js`,
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

moduleFederationConfig.output.publicPath = environment.publicPath;

module.exports = {
  ...moduleFederationConfig,
  resolve: {
    extensions: ['.js'],
    alias: {
      "@env": path.resolve(__dirname, 'src/environments')
    }
  },
};
