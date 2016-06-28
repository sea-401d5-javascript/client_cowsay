'use strict';

const angular = require('angular');
const app = angular.module('cowsay', []);

require('./services/cowsay-service')(app);
require('./controllers/cowsay-controller')(app);
