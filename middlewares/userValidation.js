const verificarUsuario = {};

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://master_daniela:Acamica123@automosaiko.tk:3306/master_daniela"
);

const tokenManejador = require("./token");

verificarUsuario.verificarToken = (req, res, next) => {
  try {
    const usuario = tokenManejador.validarToken(req.headers.token);
    req.usuario = usuario;

    next();
  } catch {
    res.status(404).json("jwt invalidos");
  }
};

verificarUsuario.verificarDatos = async (req, res, next) => {
  const { email } = req.body;
  const result = await sequelize.query(
    "SELECT name ,email, password, account FROM users WHERE email=?",
    {
      type: sequelize.QueryTypes.SELECT,
      replacements: [email],
    }
  );
  if (result.length > 0) {
    res.status(400).json({
      sucess: "false",
      mensaje: "User already exists, please use another!",
    });
  } else {
    next();
  }
};


module.exports = verificarUsuario;