// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    if (context.data.votes) {
      console.log("votes can't be populated along with poll creation");
      context.data.votes = [];
    }
  };
};
