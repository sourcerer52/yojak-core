const users = require('./users/users.service.js');
const poll = require('./poll/poll.service.js');
const votes = require('./votes/votes.service.js');
const updateOptionName = require('./update-option-name/update-option-name.service.js');
const pollOptions = require('./poll-options/poll-options.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(poll);
  app.configure(votes);
  app.configure(updateOptionName);
  app.configure(pollOptions);
};
