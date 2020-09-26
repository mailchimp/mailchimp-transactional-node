var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add subaccount
   * Add a new subaccount.
   */
  this.add = function (body) {
    return this.apiClient.post('/subaccounts/add', body);
  };

  /**
   * Delete subaccount
   * Delete an existing subaccount. Any email related to the subaccount will be saved, but stats will be removed and any future sending calls to this subaccount will fail.
   */
  this.delete = function (body) {
    return this.apiClient.post('/subaccounts/delete', body);
  };

  /**
   * Get subaccount info
   * Given the ID of an existing subaccount, return the data about it.
   */
  this.info = function (body) {
    return this.apiClient.post('/subaccounts/info', body);
  };

  /**
   * List subaccounts
   * Get the list of subaccounts defined for the account, optionally filtered by a prefix.
   */
  this.list = function (body) {
    return this.apiClient.post('/subaccounts/list', body);
  };

  /**
   * Pause subaccount
   * Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued for a maximum of 3 days until the subaccount is resumed.
   */
  this.pause = function (body) {
    return this.apiClient.post('/subaccounts/pause', body);
  };

  /**
   * Resume subaccount
   * Resume a paused subaccount's sending.
   */
  this.resume = function (body) {
    return this.apiClient.post('/subaccounts/resume', body);
  };

  /**
   * Update subaccount
   * Update an existing subaccount.
   */
  this.update = function (body) {
    return this.apiClient.post('/subaccounts/update', body);
  };

};
