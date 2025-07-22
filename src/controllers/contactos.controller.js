import turso from "../config/turso.js";
import { v4 as uuidv4 } from "uuid";

const contactosController = {
  getContactos: async (req, res) => {
    try {
      const rs = await turso.execute("SELECT * FROM Contactos");

      if (rs.rows.length === 0) {
        return res.status(404).json({ error: "No existen contactos" });
      }

      res.json(rs.rows);
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: "Error interno en el servidor" });
    }
  },

  getContactoById: async (req, res) => {
    const { id } = req.params;

    try {
      const rs = await turso.execute({
        sql: "SELECT * FROM Contactos WHERE id = ?",
        args: [id],
      });

      if (rs.rows.length === 0) {
        return res.status(404).json({ error: "No existe el contacto" });
      }

      res.json(rs.rows[0]);
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: "Error interno en el servidor" });
    }
  },

  crearContacto: async (req, res) => {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const id = uuidv4();

    try {
      await turso.execute({
        sql: "INSERT INTO Contactos (id, name, phone) VALUES (?, ?, ?)",
        args: [id, name, phone],
      });

      res.status(201).json({ id, name, phone });
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: "Error al crear el contacto" });
    }
  },
};

export default contactosController;
