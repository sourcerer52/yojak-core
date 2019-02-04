// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    options = context.data.options;
    if (options) {
      if (options.length > 1) {
        var optionsName = options.map(function(item) {
          return item.name;
        });
        console.log(optionsName);
        var isDuplicate = optionsName.some(function(item, idx) {
          return optionsName.indexOf(item) != idx;
        });
      }

      if (isDuplicate) {
        throw new Error('give unique names');
      }
    }
  };
};
