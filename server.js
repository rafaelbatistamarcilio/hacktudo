const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

// FORCE HTTPS
const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
app.use(forceSSL());


// Serve only the static files form the dist directory
app.use(express.static('dist') );

app.get('*', function (req, res, next) {
  res.sendFile(path.resolve('dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
