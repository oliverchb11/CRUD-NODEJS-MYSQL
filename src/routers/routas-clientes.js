const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente-controllers");
router.get("/", clienteController.list);
router.post("/add", clienteController.save);
router.get("/delete/:id", clienteController.delete);
router.get("/editar/:id", clienteController.edit);
router.post("/editare/:id", clienteController.editar);
module.exports = router;
