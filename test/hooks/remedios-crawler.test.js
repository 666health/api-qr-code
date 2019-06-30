const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const remediosCrawler = require('../../src/hooks/remedios-crawler');

describe('\'remediosCrawler\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: remediosCrawler()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
