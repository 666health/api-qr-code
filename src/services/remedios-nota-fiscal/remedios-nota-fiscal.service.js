// Initializes the `remediosNotaFiscal` service on path `/remedios-nota-fiscal`
const createService = require('feathers-sequelize');
const createModel = require('../../models/remedios-nota-fiscal.model');
const hooks = require('./remedios-nota-fiscal.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/remedios-nota-fiscal', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('remedios-nota-fiscal');

  service.hooks(hooks);
};
