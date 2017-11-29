const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  sequelizeClient.addHook('beforeDefine', (attributes) => {
    var defaultAttributes = {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      createdBy: {
        type: Sequelize.INTEGER,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
      },
      deletedBy: {
        type: Sequelize.INTEGER,
      }
    };
    Object.assign(attributes, defaultAttributes);

  });
  
  sequelizeClient.addHook('beforeCreate', (attributes) => {
   console.log(attributes);
  });
};

