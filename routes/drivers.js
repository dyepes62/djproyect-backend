const { Router } = require("express");
const router = Router();

const {
    postDriver, getDrivers
  } = require("../models/models.drivers");


router.route("/driver")
.post( async (req, res) => {
    const { name, birthday } = req.body;
    try {
        await postDriver(name, birthday);
        res.json({
            sucess: "true",
           mensaje: "Driver added successfully!",
          });
        } catch (error) {
            return res.status(500).json({
              mensaje: 'Error try again',
              error
            })
    }  
})
  .get( async (req, res) => {
    try {
        const drivers = await getDrivers();
        res.json(drivers);
        } catch (error) {
            return res.status(400).json({
              mensaje: 'Ocurrio un error',
              error
            })
    }  
 });
  
  module.exports = router;