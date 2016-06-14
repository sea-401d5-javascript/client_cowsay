'use strict';
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));

app.listen(8080, () =>{
  console.log('up on 8080');
});


// This assignment should contain an express static server
// a gulp file that can create a webpack bundle,
// an index that pulls in your bundle and
// has a cowsay 2-way data binding in an angular app.
// Make sure to style your app using some css.
// As a bonus make your app capable of changing the cow image to something else.
