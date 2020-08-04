var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Get user info
   * Return the information about the API-connected user.
   */
  this.info = function (body) {
    return this.apiClient.post('/users/info', body);
  };

  /**
   * Ping
   * Validate an API key and respond to a ping.
   */
  this.ping = function (body) {
    return this.apiClient.post('/users/ping', body);
  };

  /**
   * Ping 2
   * Validate an API key and respond to a ping (JSON parser version).
   */
  this.ping2 = function (body) {
    return this.apiClient.post('/users/ping2', body);
  };

  /**
   * List account senders
   * Return the senders that have tried to use this account, both verified and unverified.
   */
  this.senders = function (body) {
    return this.apiClient.post('/users/senders', body);
  };

};
