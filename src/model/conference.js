const {db, Sequelize} = require('./database')


const Conference = db.define('conferences', {
    url: {type: Sequelize.DataTypes.STRING, allowNull: false},
    folder: {type: Sequelize.DataTypes.STRING, allowNull: false},
    record: {type: Sequelize.DataTypes.STRING, allowNull: false},
    recordSize: {type: Sequelize.DataTypes.INTEGER},
    dateTime: {type: Sequelize.DataTypes.DATE}
})

module.exports = Conference