// making models
const { db, Sequelize } = require("../database");
// Ragister model to add user information for signup to Ragister table
const Ragister = db.define("ragister", {
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
});
// Listcar model to add car data to batabase inside Listcar table
const Listcar = db.define("listcar", {
  address: {
    type: Sequelize.STRING
  },
  area: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.STRING
  },
  make: {
    type: Sequelize.STRING
  },
  model: {
    type: Sequelize.STRING
  },
  carCode: {
    type: Sequelize.INTEGER
  },
  companyName: {
    type: Sequelize.STRING
  },
  wifi: {
    type: Sequelize.STRING
  },
  autoorgear: {
    type: Sequelize.STRING
  },
  pricePerHour: {
    type: Sequelize.STRING
  },
  capacity: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  companyLocationLat: {
    type: Sequelize.DECIMAL
  },
  companyLocationLong: {
    type: Sequelize.DECIMAL
  }
});

Ragister.hasMany(Listcar);
Listcar.belongsTo(Ragister, { foreignKey: "ragisterId" });

module.exports.Ragister = Ragister;
module.exports.Listcar = Listcar;
