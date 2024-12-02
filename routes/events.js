const { Router } = require("express");

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

// todas tienen que pasar por la validacion del JWT las rutas que se encuentran debajo
router.use(validarJWT);

// Obtener Eventos
router.get("/", getEventos);
router.post(
  "/",
  [
    check("title", "El title es obligatorio").not().isEmpty(),
    check("start", "La fehca de inicio es obligatorio").custom( isDate ),
    check("end", "La fehca de finalizacion es obligatorio").custom( isDate ),
    validarCampos
  ],
  crearEvento
);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
