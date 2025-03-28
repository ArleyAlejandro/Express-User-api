import userModel from "../db/models/user.schema.js";
import "../db/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUser(req, res) {
  try {
    const data = req.body;
    const email = data.email;
    const {PRIVATE_KEY} = process.env;

    // Hago una consulta a la base de datos para recibir los datos del usuario
    const user = await userModel.findOne({ email });

    // Si no existe un usuario con ese email, muestro un mensaje de error
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Comparo la contraseña recibida en el login con la contraseña encriptada en la base de datos
    const isMatch = await bcrypt.compare(data.pass, user.pass);

    // Si las contraseñas no coinciden muestro un mensaje de error
    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Token que se enviará en la coockie
    const token = jwt.sign( { id: user._id, name: user.name, email: user.email }, PRIVATE_KEY, {
      expiresIn: "24h",
    });

    // coockie para enviar al cliente 
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    console.log("Token generado:", token);

    // Respuesta al cliente de 200 ok
    return res.status(200).json({ message: "Usuario logueado correctamente" });
    
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error al login el usuario", details: error });
  }
};

export async function registerUser(req, res) {
  try {
    console.log(req)
    const data = req.body;
    const user = new userModel({
      name: data.name,
      surName: data.surName,
      email: data.email,
      pass: data.pass,
    });

    // Compruebo que el usuario no exista en la base de datos
    const email = user.email;
    const userExists = await userModel.findOne({ email });

    // Si el usuario existe devuelvo un mensaje de error
    if (userExists) {
      return res.status(401).json({ error: "The user exists, try to log in" });
    }

    await user.save();

    res.status(201).json({ message: "Usuario registrado con éxito", user });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error al registrar el usuario", details: error });
  }
}
