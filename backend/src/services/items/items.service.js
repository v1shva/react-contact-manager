// Initializes the `items` service on path `/items`
const createService = require('feathers-mongoose');
const createModel = require('../../models/items.model');
const hooks = require('./items.hooks');
const filters = require('./items.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'items',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/items', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('items');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
