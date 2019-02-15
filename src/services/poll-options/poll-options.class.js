/* eslint-disable no-unused-vars */

class Service {
  constructor(options) {
    this.options = options || {};
  }
  async find(params) {
    return [];
  }

  async get(id, params) {
    let app = this.options.app;
    let pollId = params.route.pollId;
    let newData = await app.service('poll').get(pollId);
    return { options: newData.options };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    console.log(params, data);
    return { id };
  }

  async remove(id, params) {
    console.log(params);
    return { id };
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
