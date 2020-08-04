var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Cancel ip warmup
   * Cancels the warmup process for a dedicated IP.
   */
  this.cancelWarmup = function (body) {
    return this.apiClient.post('/ips/cancel-warmup', body);
  };

  /**
   * Test custom dns
   * Tests whether a domain name is valid for use as the custom reverse DNS for a dedicated IP.
   */
  this.checkCustomDns = function (body) {
    return this.apiClient.post('/ips/check-custom-dns', body);
  };

  /**
   * Add ip pool
   * Creates a pool and returns it. If a pool already exists with this name, no action will be performed.
   */
  this.createPool = function (body) {
    return this.apiClient.post('/ips/create-pool', body);
  };

  /**
   * Delete ip address
   * Deletes a dedicated IP. This is permanent and cannot be undone.
   */
  this.delete = function (body) {
    return this.apiClient.post('/ips/delete', body);
  };

  /**
   * Delete ip pool
   * Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.
   */
  this.deletePool = function (body) {
    return this.apiClient.post('/ips/delete-pool', body);
  };

  /**
   * Get ip info
   * Retrieves information about a single dedicated IP.
   */
  this.info = function (body) {
    return this.apiClient.post('/ips/info', body);
  };

  /**
   * List ip addresses
   * Lists your dedicated IPs.
   */
  this.list = function (body) {
    return this.apiClient.post('/ips/list', body);
  };

  /**
   * List ip pools
   * Lists your dedicated IP pools.
   */
  this.listPools = function (body) {
    return this.apiClient.post('/ips/list-pools', body);
  };

  /**
   * Get ip pool info
   * Describes a single dedicated IP pool.
   */
  this.poolInfo = function (body) {
    return this.apiClient.post('/ips/pool-info', body);
  };

  /**
   * Request additional ip
   * Requests an additional dedicated IP for your account. Accounts may have one outstanding request at any time, and provisioning requests are processed within 24 hours.
   */
  this.provision = function (body) {
    return this.apiClient.post('/ips/provision', body);
  };

  /**
   * Set custom dns
   * Configures the custom DNS name for a dedicated IP.
   */
  this.setCustomDns = function (body) {
    return this.apiClient.post('/ips/set-custom-dns', body);
  };

  /**
   * Move ip to different pool
   * Moves a dedicated IP to a different pool.
   */
  this.setPool = function (body) {
    return this.apiClient.post('/ips/set-pool', body);
  };

  /**
   * Start ip warmup
   * Begins the warmup process for a dedicated IP. During the warmup process, the Transactional API will gradually increase the percentage of your mail that is sent over the warming-up IP, over a period of roughly 30 days. The rest of your mail will be sent over shared IPs or other dedicated IPs in the same pool.
   */
  this.startWarmup = function (body) {
    return this.apiClient.post('/ips/start-warmup', body);
  };

};
