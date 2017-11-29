const contacts = require('./contacts/contacts.service.js');
const users = require('./users/users.service.js');
const items = require('./items/items.service.js');
const person = require('./person/person.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(contacts);
  app.configure(users);
  app.configure(items);
  app.configure(person);
};
