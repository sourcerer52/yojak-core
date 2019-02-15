const assert = require('assert');
const app = require('../../src/app');

describe('\'pollOptions\' service', () => {
  it('registered the service', () => {
    const service = app.service('poll/:pollId/options');

    assert.ok(service, 'Registered the service');
  });
});
