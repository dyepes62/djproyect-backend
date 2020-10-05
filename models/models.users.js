const dataUsers = {};
const sequelize = require("../config/config");

dataUsers.postUser = async (
    name, email, password, account
  ) => {
    const result = await sequelize.query(
      "INSERT INTO users (name, email, password, account) VALUES (?,?,?,?)",
      {
        replacements: [name, email, password, account],
      }
    );
    return result;
  };

  dataUsers.loginUser = async (email, password) => {
    const result = await sequelize.query(
        "SELECT name, email, password, account FROM users WHERE email=? AND password=?",
        {
          type: sequelize.QueryTypes.SELECT,
          replacements: [email, password],
        }
      );
    
      return result;
    };

  module.exports = dataUsers;