const {db, Sequelize} = require('./database')


const Conference = db.define('conferences', {
    url: {type: Sequelize.DataTypes.STRING, allowNull: false},
    folder: {type: Sequelize.DataTypes.STRING, allowNull: false},
    record: {type: Sequelize.DataTypes.STRING, allowNull: false},
})

module.exports = Conference