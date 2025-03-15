import "../db/connection.js";
// import noteModel from "../db/models/note.schema.js";
import { verifyToken } from "../middleware/auth.js";
// import router from "../routes/notes.routes.js";

export const createNote = async (req, res) => {
  try {
    // const { title, text, status } = req.body;
    // const note = new noteModel({
    //   title: title,
    //   text: text,
    //   status: status,
    //   author_id,
    // });

    console.log({"user id": req.user.id})
    console.log(req.body)

    // Validar información que llega desde el cliente
    // const validData = false;

    // Verificar campos obligatorios
    // if (title && text && status) {
    //   validData = true;

      // Buscar el id del usuario que ha iniciado sesión

      //   note.author_id =

      // Crear nota en la base de datos
      //   const note = await noteModel.create();
    // }

    // Enviar respuesta al cliente
    // if (validData) {
        return res.status(200).json({ message: "All good!" });
    // } else {
    //   return res.status(400).json({ message: "Invalid data" });
    // }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error al crear nota el usuario", details: error });
  }
};
