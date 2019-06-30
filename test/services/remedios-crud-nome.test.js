const assert = require('assert');
const app = require('../../src/app');

describe('\'remediosCrudNome\' service', () => {
  it('registered the service', () => {
    const service = app.service('remedios-crud-nome');

    assert.ok(service, 'Registered the service');
  });
});
