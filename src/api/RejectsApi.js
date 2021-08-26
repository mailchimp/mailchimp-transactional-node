var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add email to denylist
   * Adds an email to your email rejection denylist. Addresses that you add manually will never expire and there is no reputation penalty for removing them from your denylist. Attempting to denylist an address that has been added to the allowlist will have no effect.
   */
  this.add = function (body) {
    return this.apiClient.post('/rejects/add', body);
  };

  /**
   * Delete email from denylist
   * Deletes an email rejection. There is no limit to how many rejections you can remove from your denylist, but keep in mind that each deletion has an affect on your reputation.
   */
  this.delete = function (body) {
    return this.apiClient.post('/rejects/delete', body);
  };

  /**
   * List denylisted emails
   * Retrieves your email rejection denylist. You can provide an email address to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.
   */
  this.list = function (body) {
    return this.apiClient.post('/rejects/list', body);
  };

};
