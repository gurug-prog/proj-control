const sequelize = require('./dbConnection');
const initModels = require('../models/initModels');
const modelsObj = initModels(sequelize);

module.exports = { modelsObj, sequelize };
