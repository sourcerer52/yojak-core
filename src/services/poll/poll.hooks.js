const { authenticate } = require('@feathersjs/authentication').hooks;
const { required } = require('feathers-hooks-common');
const { associateCurrentUser } = require('feathers-authentication-hooks');
const { restrictVotes } = require('../../hooks/restrict-votes');
options = {
  fieldsReq: ['title']
};
console.log("here");

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      required(...options.fieldsReq),
      associateCurrentUser({ idField: '_id', ownerField: 'createdBy' }),
      restrictVotes()
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
