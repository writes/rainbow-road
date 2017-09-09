// decide which credentials to use
if (process.env.NODE_ENV === 'production') {
  // prod
  module.exports = require('./prod');
} else {
  // dev
  module.exports = require('./dev');
}
