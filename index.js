require('dotenv').config();

const app = require('./app');
const {sequelize} = require('./db');

const port = process.env.PORT;

;(async _ => {
  // await sequelize.sync({force: false});
  await app.listen(port, _ => console.log(
    `{{Server Start}}-NODE_ENV[${process.env.NODE_ENV}]-PORT[${port}]`
  ));
})();