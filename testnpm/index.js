var moment = require('moment');
console.log(moment().format("ddd, hA"));

/**
 * NPM is  a software , a programme
package manager
package -> software which provides some utility
npm registry is a global respository which is a hub of open source packages which can be used by others


if i want to create my own package
i will use npm init

if i want to use other packages written by others
npm install 

npm install --save -> will add to dependencies part in package.json file of my package
which helps others use my package without a heavy bundled node_modules
all they have to do is run 
npm install

npm update

Semantic versioning

^2.29.4 -> 3.0.0

major version. minor version. patch version


**/