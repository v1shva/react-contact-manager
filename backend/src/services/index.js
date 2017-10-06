const contacts = require('./contacts/contacts.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(contacts);
  app.configure(users);
};
