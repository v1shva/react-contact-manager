const contacts = require('./contacts/contacts.service.js');
const users = require('./users/users.service.js');
const items = require('./items/items.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(contacts);
  app.configure(users);
  app.configure(items);
};
