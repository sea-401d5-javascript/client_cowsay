'use strict';

const angular = require('angular');
const app = angular.module('Cowsay', []);

require('./services')(app);
require('./controllers')(app);
