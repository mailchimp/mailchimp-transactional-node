var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add metadata field
   * Add a new custom metadata field to be indexed for the account.
   */
  this.add = function (body) {
    return this.apiClient.post('/metadata/add', body);
  };

  /**
   * Delete metadata field
   * Delete an existing custom metadata field. Deletion isn't instataneous, and /metadata/list will continue to return the field until the asynchronous deletion process is complete.
   */
  this.delete = function (body) {
    return this.apiClient.post('/metadata/delete', body);
  };

  /**
   * List metadata fields
   * Get the list of custom metadata fields indexed for the account.
   */
  this.list = function (body) {
    return this.apiClient.post('/metadata/list', body);
  };

  /**
   * Update metadata field
   * Update an existing custom metadata field.
   */
  this.update = function (body) {
    return this.apiClient.post('/metadata/update', body);
  };

};
