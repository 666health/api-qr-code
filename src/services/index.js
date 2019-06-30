const remediosNotaFiscal = require('./remedios-nota-fiscal/remedios-nota-fiscal.service.js');
const remediosCrudNome = require('./remedios-crud-nome/remedios-crud-nome.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(remediosNotaFiscal);
  app.configure(remediosCrudNome);
};
