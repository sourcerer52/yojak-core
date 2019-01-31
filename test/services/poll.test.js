const assert = require('assert');
const app = require('../../src/app');

describe('\'poll\' service', () => {
  it('registered the service', () => {
    const service = app.service('poll');

    assert.ok(service, 'Registered the service');
  });
});
