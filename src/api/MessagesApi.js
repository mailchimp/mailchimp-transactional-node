var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Cancel scheduled email
   * Cancels a scheduled email.
   */
  this.cancelScheduled = function (body) {
    return this.apiClient.post('/messages/cancel-scheduled', body);
  };

  /**
   * Get message content
   * Get the full content of a recently sent message.
   */
  this.content = function (body) {
    return this.apiClient.post('/messages/content', body);
  };

  /**
   * Get message info
   * Get the information for a single recently sent message.
   */
  this.info = function (body) {
    return this.apiClient.post('/messages/info', body);
  };

  /**
   * List scheduled emails
   * Queries your scheduled emails.
   */
  this.listScheduled = function (body) {
    return this.apiClient.post('/messages/list-scheduled', body);
  };

  /**
   * Parse mime document
   * Parse the full MIME document for an email message, returning the content of the message broken into its constituent pieces.
   */
  this.parse = function (body) {
    return this.apiClient.post('/messages/parse', body);
  };

  /**
   * Reschedule email
   * Reschedules a scheduled email.
   */
  this.reschedule = function (body) {
    return this.apiClient.post('/messages/reschedule', body);
  };

  /**
   * Search messages by date
   * Search recently sent messages and optionally narrow by date range, tags, senders, and API keys. If no date range is specified, results within the last 7 days are returned. This method may be called up to 20 times per minute. If you need the data more often, you can use /messages/info.json to get the information for a single message, or webhooks to push activity to your own application for querying.
   */
  this.search = function (body) {
    return this.apiClient.post('/messages/search', body);
  };

  /**
   * Search messages by hour
   * Search the content of recently sent messages and return the aggregated hourly stats for matching messages.
   */
  this.searchTimeSeries = function (body) {
    return this.apiClient.post('/messages/search-time-series', body);
  };

  /**
   * Send new message
   * Send a new transactional message through the Transactional API.
   */
  this.send = function (body) {
    return this.apiClient.post('/messages/send', body);
  };

  /**
   * Send mime document
   * Take a raw MIME document for a message, and send it exactly as if it were sent through the Transactional API's SMTP servers.
   */
  this.sendRaw = function (body) {
    return this.apiClient.post('/messages/send-raw', body);
  };

  /**
   * Send using message template
   * Send a new transactional message through the Transactional API using a template.
   */
  this.sendTemplate = function (body) {
    return this.apiClient.post('/messages/send-template', body);
  };

};
