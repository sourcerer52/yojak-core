const { authenticate } = require('@feathersjs/authentication').hooks;
const { required } = require('feathers-hooks-common');
const { associateCurrentUser } = require('feathers-authentication-hooks');
const restricVoteField = require('@hooks/restrict-vote-field');
const checkDistinctOptions = require('@hooks/check-distinct-options');
const checkifOptionExists = require('@hooks/check-if-option-exists');
options = {
  fieldsReq: ['title']
};

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      required(...options.fieldsReq),
      associateCurrentUser({ idField: '_id', as: 'createdBy' }),
      restricVoteField(),
      checkDistinctOptions()
    ],
    update: [checkifOptionExists()],
    patch: [checkifOptionExists()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
