

const remediosCrawler = require('../../hooks/remedios-crawler');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create(context) {
      return remediosCrawler(context)
    },
    update(context) {
      return remediosCrawler(context)
    },
    patch(context) {
      return remediosCrawler(context)
    },
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
