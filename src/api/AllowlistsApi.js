var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add email to allowlist
   * Adds an email to your email rejection allowlist. If the address is currently on your denylist, that denylist entry will be removed automatically.
   */
  this.add = function (body) {
    return this.apiClient.post('/allowlists/add', body);
  };

  /**
   * Remove email from allowlist
   * Removes an email address from the allowlist.
   */
  this.delete = function (body) {
    return this.apiClient.post('/allowlists/delete', body);
  };

  /**
   * List allowlisted emails
   * Retrieves your email rejection allowlist. You can provide an email address or search prefix to limit the results. Returns up to 1000 results.
   */
  this.list = function (body) {
    return this.apiClient.post('/allowlists/list', body);
  };

};
