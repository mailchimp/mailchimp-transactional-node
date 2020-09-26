var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add email to whitelist
   * Adds an email to your email rejection whitelist. If the address is currently on your blacklist, that blacklist entry will be removed automatically.
   */
  this.add = function (body) {
    return this.apiClient.post('/whitelists/add', body);
  };

  /**
   * Remove email from whitelist
   * Removes an email address from the whitelist.
   */
  this.delete = function (body) {
    return this.apiClient.post('/whitelists/delete', body);
  };

  /**
   * List whitelisted emails
   * Retrieves your email rejection whitelist. You can provide an email address or search prefix to limit the results. Returns up to 1000 results.
   */
  this.list = function (body) {
    return this.apiClient.post('/whitelists/list', body);
  };

};
