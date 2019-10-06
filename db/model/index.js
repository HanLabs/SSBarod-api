const models = []

module.exports = (obj, sequelize) => {
  models.forEach(v => v(obj, sequelize));

  return obj;
};