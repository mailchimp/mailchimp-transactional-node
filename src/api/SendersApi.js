var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add sender domain
   * Adds a sender domain to your account. Sender domains are added automatically as you send, but you can use this call to add them ahead of time.
   */
  this.addDomain = function (body) {
    return this.apiClient.post('/senders/add-domain', body);
  };

  /**
   * Check domain settings
   * Checks the SPF and DKIM settings for a domain. If you haven't already added this domain to your account, it will be added automatically.
   */
  this.checkDomain = function (body) {
    return this.apiClient.post('/senders/check-domain', body);
  };

  /**
   * List sender domains
   * Returns the sender domains that have been added to this account.
   */
  this.domains = function (body) {
    return this.apiClient.post('/senders/domains', body);
  };

  /**
   * Get sender info
   * Return more detailed information about a single sender, including aggregates of recent stats.
   */
  this.info = function (body) {
    return this.apiClient.post('/senders/info', body);
  };

  /**
   * List account senders
   * Return the senders that have tried to use this account.
   */
  this.list = function (body) {
    return this.apiClient.post('/senders/list', body);
  };

  /**
   * View sender history
   * Return the recent history (hourly stats for the last 30 days) for a sender.
   */
  this.timeSeries = function (body) {
    return this.apiClient.post('/senders/time-series', body);
  };

  /**
   * Verify domain
   * Sends a verification email in order to verify ownership of a domain. Domain verification is a required step to confirm ownership of a domain. Once a domain has been verified in a Transactional API account, other accounts may not have their messages signed by that domain unless they also verify the domain. This prevents other Transactional API accounts from sending mail signed by your domain.
   */
  this.verifyDomain = function (body) {
    return this.apiClient.post('/senders/verify-domain', body);
  };

};
