var ApiClient = require('../ApiClient');

module.exports = function (apiClient) {
  this.apiClient = apiClient || ApiClient.instance();

  /**
   * Add template
   * Add a new template.
   */
  this.add = function (body) {
    return this.apiClient.post('/templates/add', body);
  };

  /**
   * Delete template
   * Delete a template.
   */
  this.delete = function (body) {
    return this.apiClient.post('/templates/delete', body);
  };

  /**
   * Get template info
   * Get the information for an existing template.
   */
  this.info = function (body) {
    return this.apiClient.post('/templates/info', body);
  };

  /**
   * List templates
   * Return a list of all the templates available to this user.
   */
  this.list = function (body) {
    return this.apiClient.post('/templates/list', body);
  };

  /**
   * Publish template content
   * Publish the content for the template. Any new messages sent using this template will start using the content that was previously in draft.
   */
  this.publish = function (body) {
    return this.apiClient.post('/templates/publish', body);
  };

  /**
   * Render html template
   * Inject content and optionally merge fields into a template, returning the HTML that results.
   */
  this.render = function (body) {
    return this.apiClient.post('/templates/render', body);
  };

  /**
   * Get template history
   * Return the recent history (hourly stats for the last 30 days) for a template.
   */
  this.timeSeries = function (body) {
    return this.apiClient.post('/templates/time-series', body);
  };

  /**
   * Update template
   * Update the code for an existing template. If null is provided for any fields, the values will remain unchanged.
   */
  this.update = function (body) {
    return this.apiClient.post('/templates/update', body);
  };

};
