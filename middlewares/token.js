const jwt = require("jsonwebtoken");

const tokenManejador = {};

const jwtFirma = "Z[sdWKfhS110jXE[<";

tokenManejador.crearToken = (user) => jwt.sign(user, jwtFirma);
tokenManejador.validarToken = (token) => jwt.verify(token, jwtFirma);
module.exports = tokenManejador;