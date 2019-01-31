const users = require('./users/users.service.js');
const poll = require('./poll/poll.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(poll);
};
