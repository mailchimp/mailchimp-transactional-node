var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add webhook
   * Add a new webhook.
   */
  this.add = function (body) {
    return this.apiClient.post('/webhooks/add', body);
  };

  /**
   * Delete webhook
   * Delete an existing webhook.
   */
  this.delete = function (body) {
    return this.apiClient.post('/webhooks/delete', body);
  };

  /**
   * Get webhook info
   * Given the ID of an existing webhook, return the data about it.
   */
  this.info = function (body) {
    return this.apiClient.post('/webhooks/info', body);
  };

  /**
   * List webhooks
   * Get the list of all webhooks defined on the account.
   */
  this.list = function (body) {
    return this.apiClient.post('/webhooks/list', body);
  };

  /**
   * Update webhook
   * Update an existing webhook.
   */
  this.update = function (body) {
    return this.apiClient.post('/webhooks/update', body);
  };

};
