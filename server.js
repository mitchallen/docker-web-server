/**
 * Author: Mitch Allen 
 * https://scriptable.com
 * https://mitchallen.com
 */

const express = require('express');
const app = express();
const port = 3000;

// Requires launch via npm start to set value
const VERSION = process.env.npm_package_version;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, () => {
  console.log(`version: ${VERSION}`)
  console.log(`Server listening on port ${port}`);
});

process.on('SIGINT', () => {
  console.debug('\nSIGINT signal received: closing HTTP server')
  server.close(() => {
    console.debug('HTTP server closed')
  })
  process.exit()
})

process.on('SIGTERM', () => {
  console.debug('\nSIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.debug('HTTP server closed')
  })
  process.exit()
})


