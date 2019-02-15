// Initializes the `pollOptions` service on path `/poll/:pollId/options`
const createService = require('./poll-options.class.js');
const hooks = require('./poll-options.hooks');

module.exports = function(app) {
  const paginate = app.get('paginate');

  const options = {
    paginate,
    app
  };

  // Initialize our service with any options it requires
  app.use('/poll/:pollId/options', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('poll/:pollId/options');

  service.hooks(hooks);
};
