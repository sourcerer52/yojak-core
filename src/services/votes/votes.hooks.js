const { authenticate } = require('@feathersjs/authentication').hooks;
const {
  required,
  disallow,
  skipRemainingHooks
} = require('feathers-hooks-common');
const {
  associateCurrentUser,
  restrictToOwner
} = require('feathers-authentication-hooks');

options = {
  fieldsReq: ['pollId,optionId']
};

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      required(...options.fieldsReq),
      associateCurrentUser({ idField: '_id', as: 'votedBy' })
    ],
    update: [restrictToOwner({ idField: '_id', ownerField: 'votedBy' })],
    patch: [disallow()],
    remove: [
      skipRemainingHooks(context => !context.provider),
      restrictToOwner({ idField: '_id', ownerField: 'votedBy' })
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
