// Initializes the `poll` service on path `/poll`
const createService = require('feathers-mongoose');
const createModel = require('../../models/poll.model');
const hooks = require('./poll.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/poll', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('poll');

  service.hooks(hooks);
};
