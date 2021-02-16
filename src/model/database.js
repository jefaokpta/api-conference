const Sequelize = require('sequelize')

const db = new Sequelize('vip-conference', 'jefao', 'jefao', {
    host: 'localhost',
    dialect: 'mariadb'
  });

  //db.authenticate().then(console.log('ok'))
module.exports = {db, Sequelize}