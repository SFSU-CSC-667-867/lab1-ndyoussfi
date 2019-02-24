const {a,b} = require('./myfunctions.js'); // object destructing: taking an object apart
const anExternalFunction = require('./external.js');


// this one doesn't have a path. so its either built-in
// or in package.json
const p = require('path');

anExternalFunction();
a();
b();