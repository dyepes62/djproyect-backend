const dataDrivers = {};
const sequelize = require("../config/config");

dataDrivers.postDriver = async (
    name,
    birthday
  ) => {
    const result = await sequelize.query(
      "INSERT INTO drivers (name, birthday) VALUES (?,?)",
      {
        replacements: [name, birthday],
      }
    );
    return result;
  };

  dataDrivers.getDrivers = async () => {
    const result = await sequelize.query(
      "SELECT id, name, birthday FROM drivers",
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return result;
  };

  module.exports = dataDrivers;