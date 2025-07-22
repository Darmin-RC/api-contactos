import express from "express";
import morgan from "morgan";
import config from "./src/config/config.js";
import contactosRoutes from "./src/routes/contactos.routes.js";

const PORT = config.PORT;

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// rutas
app.use(contactosRoutes);

app.listen(PORT, console.log("Servidor corriendo en el puerto: ", PORT));
