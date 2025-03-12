import express from "express";
import userModel from "../db/models/user.schema.js";  
import "../db/connection.js"; 
import bcrypt from "bcrypt";


export const loginUser = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)

        const email = data.email;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(data.pass, user.pass);

        if (!isMatch) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }


        res.status(201).json({ message: "Usuario loguead con éxito" });
    } catch (error) {
        res.status(400).json({ error: "Error al login el usuario", details: error });
    }
}

export async function registerUser(req, res) {
    try {
        const data = req.body;
        const user = new userModel({
            name: data.name,
            surName: data.surName,
            email: data.email,
            pass: data.pass  
        });

        user.pass = await bcrypt.hash(user.pass, 10);
        await user.save();

        res.status(201).json({ message: "Usuario registrado con éxito", user });

    } catch (error) {
        res.status(400).json({ error: "Error al registrar el usuario", details: error });
    }
}


// export async function updateUser (req, res){

// }

// export async function deleteUser (req, res){

// }