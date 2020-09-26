var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * View all tags history
   * Return the recent history (hourly stats for the last 30 days) for all tags.
   */
  this.allTimeSeries = function (body) {
    return this.apiClient.post('/tags/all-time-series', body);
  };

  /**
   * Delete tag
   * Deletes a tag permanently. Deleting a tag removes the tag from any messages that have been sent, and also deletes the tag's stats. There is no way to undo this operation, so use it carefully.
   */
  this.delete = function (body) {
    return this.apiClient.post('/tags/delete', body);
  };

  /**
   * Get tag info
   * Return more detailed information about a single tag, including aggregates of recent stats.
   */
  this.info = function (body) {
    return this.apiClient.post('/tags/info', body);
  };

  /**
   * List tags
   * Return all of the user-defined tag information.
   */
  this.list = function (body) {
    return this.apiClient.post('/tags/list', body);
  };

  /**
   * View tag history
   * Return the recent history (hourly stats for the last 30 days) for a tag.
   */
  this.timeSeries = function (body) {
    return this.apiClient.post('/tags/time-series', body);
  };

};
