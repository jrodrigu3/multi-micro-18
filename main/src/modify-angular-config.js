/* const fs = require('fs');
const angularConfig = require('./angular.json');
const environment = require(`./src/environments/environment`);

angularConfig.projects.yourProjectName.architect.serve.options.port = environment.port;
angularConfig.projects.yourProjectName.architect.serve.options.publicHost = `http://localhost:${environment.port}`;

fs.writeFileSync('angular.json', JSON.stringify(angularConfig, null, 2));
console.log(`Updated angular.json with port ${environment.port}`);
 */
