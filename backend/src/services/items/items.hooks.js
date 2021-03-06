const { authenticate } = require('feathers-authentication').hooks;
const fileUpload = require('../../hooks/file-upload').hooks;

module.exports = {
  before: {
    all: [ authenticate('jwt') ,fileUpload],
    find: [],
    get: [],
    create: [],
    update: [fileUpload],
    patch: [],
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
