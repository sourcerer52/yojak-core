const { authenticate } = require('@feathersjs/authentication').hooks;
const {
  required,
  preventChanges,
  skipRemainingHooks
} = require('feathers-hooks-common');
const {
  associateCurrentUser,
  restrictToOwner
} = require('feathers-authentication-hooks');
const checkDistinctOptions = require('@hooks/check-distinct-options');
const checkOptionExists = require('@hooks/check-if-option-exists');
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
      checkDistinctOptions()
    ],
    update: [
      checkDistinctOptions(),
      checkOptionExists(),
      preventChanges(true, 'createdBy')
    ],
    patch: [
      checkDistinctOptions(),
      checkOptionExists(),
      preventChanges(true, 'createdBy')
    ],
    remove: [
      skipRemainingHooks(context => !context.provider),
      restrictToOwner({ idField: '_id', ownerField: 'createdBy' })
    ]
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
