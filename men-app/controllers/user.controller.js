import express from "express";
import userModel from "../db/models/user.schema.js";  
import "../db/connection.js"; 
import bcrypt from "bcrypt";



export const loginUser = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)

        $email = data.email;

        


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

        // Encripto la contraseña
        user.pass = await bcrypt.hash(user.pass, 10);

        // Inserto el usuario en la base de datos 
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