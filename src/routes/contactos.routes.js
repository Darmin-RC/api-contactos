import { Router } from "express";
import contactosController from "../controllers/contactos.controller.js";

const contactosRoutes = Router();

contactosRoutes.get("/contactos", contactosController.getContactos);
contactosRoutes.get("/contactos/:id", contactosController.getContactoById);
contactosRoutes.post("/contactos", contactosController.crearContacto);

export default contactosRoutes;
