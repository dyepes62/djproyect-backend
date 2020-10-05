const { Router } = require("express");
const router = Router();

const tokenManejador = require("../middlewares/token");

const {
    verificarDatos,
  } = require("../middlewares/userValidation");

const {
    postUser,loginUser
  } = require("../models/models.users");

router.route("/user")
.post( verificarDatos, async ( req, res) => {
    const { name, email, password, account } = req.body;
    try {
        const datos = { name, email, password, account };
        await postUser(name, email, password, account);
       const token = tokenManejador.crearToken(datos);
        res.json({
            sucess: "true",
            token,
            mensaje: "The user registered successfully, Go Login!",
          });
        } catch (error) {
            return res.status(500).json({
              mensaje: 'Ocurrio un error',
              error
            })
    }  
});

router.route("/login").post( async (req, res) => {
    const { email, password } = req.body;
    const validaUser = await loginUser(email, password);
    if (validaUser.length > 0) {
      const token = tokenManejador.crearToken(validaUser[0]);
      res.status(201).json({
        token,
        mensaje: "Usuario Valido",
      });
    } else {
      res.status(404).json({
        mensaje: "User not found"
      });
    }
  });

  module.exports = router;