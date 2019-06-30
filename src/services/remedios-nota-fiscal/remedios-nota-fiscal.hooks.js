

const remediosCrawler = require('../../hooks/remedios-crawler');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create(context) {
      return remediosCrawler(context)
    },
    update: [],//remediosCrawler()],
    patch: [],//remediosCrawler()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
