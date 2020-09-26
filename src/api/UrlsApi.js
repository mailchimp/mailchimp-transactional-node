var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add tracking domains
   * Add a tracking domain to your account.
   */
  this.addTrackingDomain = function (body) {
    return this.apiClient.post('/urls/add-tracking-domain', body);
  };

  /**
   * Check cname settings
   * Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call.
   */
  this.checkTrackingDomain = function (body) {
    return this.apiClient.post('/urls/check-tracking-domain', body);
  };

  /**
   * List most clicked urls
   * Get the 100 most clicked URLs.
   */
  this.list = function (body) {
    return this.apiClient.post('/urls/list', body);
  };

  /**
   * Search most clicked urls
   * Return the 100 most clicked URLs that match the search query given.
   */
  this.search = function (body) {
    return this.apiClient.post('/urls/search', body);
  };

  /**
   * Get url history
   * Return the recent history (hourly stats for the last 30 days) for a URL
   */
  this.timeSeries = function (body) {
    return this.apiClient.post('/urls/time-series', body);
  };

  /**
   * List tracking domains
   * Get the list of tracking domains set up for this account.
   */
  this.trackingDomains = function (body) {
    return this.apiClient.post('/urls/tracking-domains', body);
  };

};
