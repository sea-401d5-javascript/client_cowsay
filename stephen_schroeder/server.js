'use strict';

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/build'));//static takes a path & options.

app.listen(8080, () => {
  console.log('server is up on 8080');
});
