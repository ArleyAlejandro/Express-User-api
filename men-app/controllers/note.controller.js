import "../db/connection.js";
import noteModel from "../db/models/note.schema.js";

export const createNote = async (req, res) => {
  try {
    const { title, text, status } = req.body;
    const author_id = req.user.id;
    let validData = false;

    const note = new noteModel({
      title: title,
      text: text,
      status: status,
      author_id: author_id,
    });

    // Crear nota en la base de datos
    await note.save();
    return res.status(200).json({ message: "Nota creada con éxito!" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error al crear nota el usuario", details: error });
  }
};

export const listNote = async (req, res) => {
  try {
    // Guardo la id del usuario que me llega desde el cliente
    const { id } = req.user;

    if (id) {
      // Recuperar las notas del usuario desde la base de datos, ordenadas por fecha de actualización
      const notes = await noteModel
        .find({ author_id: id })
        .sort({ updatedAt: -1 });
      return res
        .status(200)
        .json({ message: "Mostrando notas del usuario!", notes });
    } else {
      res.status(404).json({ error: "Id de usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: "Error al listar nota", details: error });
  }
};

export const updateNote = async (req, res) => {
  try {
    // Id de la nota
    const { id } = req.body;
    // Campos de la nota
    const { title, text, status } = req.body;
    // Id del usuario
    const userId = req.user.id;

    const updatedNote = await noteModel.findOneAndUpdate(
      { _id: id, author_id: userId },
      { title, text, status, updatedAt: new Date() }, 
      { new: true, runValidators: true } 
    );

    if (!updatedNote) {
      return res
        .status(404)
        .json({ error: "Nota no encontrada o no autorizada" });
    }

    return res
      .status(200)
      .json({ message: "Nota actualizada con éxito", updatedNote });
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la nota", details: error });
  }
};

export const deleteNote = async (req, res) => {
  try {
    // Guardo la id del usuario que me llega desde el cliente
    const nota_id = req.body.id;

    // Eliminar la nota en la base de datos
    const deletedNote = await noteModel.findByIdAndDelete(nota_id);

    if (!deletedNote) {
      return res.status(404).json({ error: "Nota no encontrada" });
    }

    return res
      .status(200)
      .json({ message: "Nota eliminada correctamente", deletedNote });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error al eliminar la nota", details: error });
  }
};
