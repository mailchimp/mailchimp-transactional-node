var ApiClient = require('./ApiClient');

module.exports = function(apiKey) {
  return ApiClient.instance(apiKey);
};
