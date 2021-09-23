var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Export activity history
   * Begins an export of your activity history. The activity will be exported to a zip archive containing a single file named activity.csv in the same format as you would be able to export from your account's activity view. It includes the following fields: Date, Email Address, Sender, Subject, Status, Tags, Opens, Clicks, Bounce Detail. If you have configured any custom metadata fields, they will be included in the exported data.
   */
  this.activity = function (body) {
    return this.apiClient.post('/exports/activity', body);
  };

  /**
   * Export Allowlist
   * Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive containing a single file named allowlist.csv that includes the following fields: email, detail, created_at.
   */
  this.allowlist = function (body) {
    return this.apiClient.post('/exports/allowlist', body);
  };

  /**
   * View export info
   * Returns information about an export job. If the export job's state is 'complete', the returned data will include a URL you can use to fetch the results. Every export job produces a zip archive, but the format of the archive is distinct for each job type. The api calls that initiate exports include more details about the output format for that job type.
   */
  this.info = function (body) {
    return this.apiClient.post('/exports/info', body);
  };

  /**
   * List exports
   * Returns a list of your exports.
   */
  this.list = function (body) {
    return this.apiClient.post('/exports/list', body);
  };

  /**
   * Export denylist
   * Begins an export of your rejection denylist. The denylist will be exported to a zip archive containing a single file named rejects.csv that includes the following fields: email, reason, detail, created_at, expires_at, last_event_at, expires_at.
   */
  this.rejects = function (body) {
    return this.apiClient.post('/exports/rejects', body);
  };

  /**
   * Export Allowlist
   * Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive containing a single file named allowlist.csv that includes the following fields: email, detail, created_at.
   */
  this.whitelist = function (body) {
    return this.apiClient.post('/exports/whitelist', body);
  };

};
