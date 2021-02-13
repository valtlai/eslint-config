'use strict';

const fs = require('fs/promises');
const json = require('./package-lock.json');

delete json.dependencies;

fs.writeFile('package-lock.json', JSON.stringify(json, null, '\t') + '\n');
