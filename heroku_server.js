/**
 * https://gist.github.com/ryanoglesby08/1e1f49d87ae8ab2cabf45623fc36a7fe
 */

/*
  Incredibly simple Node.js and Express application server for serving static assets.
  
  DON'T USE THIS IN PRODUCTION!

    It is meant for learning purposes only. This server is not optimized for performance, 
    and is missing key features such as error pages, compression, and caching.

*/

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

console.log("the app is starting on port", port);

// serve static assets normally
app.use(express.static(__dirname + '/build'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log("the app is listening on port", port);
});
