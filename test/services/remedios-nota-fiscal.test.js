const assert = require('assert');
const app = require('../../src/app');

describe('\'remediosNotaFiscal\' service', () => {
  it('registered the service', () => {
    const service = app.service('remedios-nota-fiscal');

    assert.ok(service, 'Registered the service');
  });
});
