// Initializes the `updateOptionName` service on path `/update-option-name`
const createService = require('./update-option-name.class.js');
const hooks = require('./update-option-name.hooks');

module.exports = function(app) {
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/update-option-name', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('update-option-name');

  service.hooks(hooks);
};
