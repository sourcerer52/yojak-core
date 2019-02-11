const { authenticate } = require('@feathersjs/authentication').hooks;
const { required } = require('feathers-hooks-common');
const {
  associateCurrentUser,
  restrictToOwner
} = require('feathers-authentication-hooks');
const checkDistinctOptions = require('@hooks/check-distinct-options');
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
    update: [],
    patch: [],
    remove: [restrictToOwner({ idField: 'id', ownerField: 'createdBy' })]
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
