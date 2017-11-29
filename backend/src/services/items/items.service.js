// Initializes the `items` service on path `/items`
const createService = require('feathers-mongoose');
const createModel = require('../../models/items.model');
const hooks = require('./items.hooks');
const filters = require('./items.filters');
const multer = require('multer');
const multipartMiddleware = multer({dest:'/public/items/pictures/'});


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
  app.use('/items',
    function(req, res, next){
      console.log(req);
      next();
    },

    function(req, res, next){
    console.log(req);
      if(req.body && req.file){
        req.body.picture = req.file.filename;
      }
      next();
    },
    createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('items');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
