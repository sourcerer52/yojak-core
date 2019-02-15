const assert = require('assert');
const app = require('../../src/app');

describe('\'updateOptionName\' service', () => {
  it('registered the service', () => {
    const service = app.service('update-option-name');

    assert.ok(service, 'Registered the service');
  });
});
