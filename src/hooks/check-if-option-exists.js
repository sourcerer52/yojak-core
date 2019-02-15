// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    // console.log(context.id);
    const data = await context.app.service('poll').get(context.id);
    existingOptions = data.options;
    if (existingOptions.length > 0) {
      var givenOptions = context.data['$push'].options;
      if (givenOptions && givenOptions.length > 0) {
        for (var i = 0; i < givenOptions.length; i++) {
          for (var j = 0; j < existingOptions.length; j++) {
            if (givenOptions[i].name === existingOptions[j].name) {
              throw new Error('Option(s) already exists');
            }
          }
        }
      }
    }
  };
};
