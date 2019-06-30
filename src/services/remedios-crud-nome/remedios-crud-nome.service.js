// Initializes the `remediosCrudNome` service on path `/remedios-crud-nome`
const createService = require('feathers-sequelize');
const createModel = require('../../models/remedios-crud-nome.model');
const hooks = require('./remedios-crud-nome.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/remedios-crud-nome', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('remedios-crud-nome');

  service.hooks(hooks);
};
