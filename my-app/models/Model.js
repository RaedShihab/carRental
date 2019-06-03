const Sequelize = require('sequelize');
const db = require('../database.js');

const User = db.define('user', {
    firstname: {
        type: Sequelize.STRING
    },
    lasttname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }

})
module.exports = User;