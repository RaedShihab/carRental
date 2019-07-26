//making online mysql database

// const Sequelize = require("sequelize");
// const db = new Sequelize("9faovNt1DB", "9faovNt1DB", "5bFECVA1HH", {
//   host: "remotemysql.com",
//   dialect: "mysql"
// });
// db.sync({ force: false, logging: false }).then(() => {
//   console.log(`Database & tables created!`);
// });

// module.exports.db = db;
// module.exports.Sequelize = Sequelize;

const Sequelize = require("sequelize");
const db = new Sequelize("raeddtabase", "root", "Raed1992", {
  host: "localhost",
  dialect: "mysql"
});
db.sync({ force: false, logging: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
