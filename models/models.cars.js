const dataCars = {};
const sequelize = require("../config/config");

dataCars.postCar = async (
    carPlate,
    carModel
  ) => {
    const result = await sequelize.query(
      "INSERT INTO cars (carPlate, carModel) VALUES (?,?)",
      {
        replacements: [carPlate, carModel],
      }
    );
    return result;
  };

  dataCars.getCars = async () => {
    const result = await sequelize.query(
      "SELECT id, carPlate, carModel FROM cars",
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return result;
  };


  module.exports = dataCars;