const { authenticate } = require('@feathersjs/authentication').hooks;
const { required } = require('feathers-hooks-common');
const { associateCurrentUser } = require('feathers-authentication-hooks');

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
      associateCurrentUser({ idField: '_id', ownerField: 'createdBy' })
    ],
    update: [],
    patch: [],
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
