/**
 * @file get local package.json
 */

const findPrefixPromise = require('./findPrefixPromise');
const fs = require('fs');
const path = require('path');

/**
 * @return {Promise.<Object>} package.json
 */
module.exports = function getLocalPackage() {
  return findPrefixPromise().then((packagePath) => {
    return JSON.parse(
      fs.readFileSync(
        path.join(packagePath, 'package.json'), 'utf8'
      )
    );
  });
};
