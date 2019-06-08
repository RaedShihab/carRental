const { db, Sequelize } = require('../database');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    }

})
// Register Model
const Ragister = db.define('ragister', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phonenumber: {
        type: Sequelize.STRING
    }

})

module.exports = Ragister;
module.exports = User;
