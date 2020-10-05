const { Router } = require("express");
const router = Router();

const {
    postCar,getCars
  } = require("../models/models.cars");

router.route("/car")
.post( async (req, res) => {
    const { carPlate,carModel } = req.body;
    try {
        await postCar(carPlate, carModel);
        res.json({
            sucess: "true",
            mensaje: "Car added successfully!",
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
        const cars = await getCars();
        res.json(cars);
        } catch (error) {
            return res.status(400).json({
              mensaje: 'Ocurrio un error',
              error
            })
    }  
});
  module.exports = router;