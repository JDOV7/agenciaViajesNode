import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaContacto,
  paginaDetalleViaje,
} from "../controllers/paginasController.js";

import { guardarTestimonial } from "../controllers/testimonialController.js";
const router = express.Router();

//req = reques, res = response, req =lo que yo envio, res lo que express envia
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

//el  :viaje debe ser igual que el params en el request
router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);

router.post("/testimoniales", guardarTestimonial);

router.get("/contacto", paginaContacto);

export default router;
