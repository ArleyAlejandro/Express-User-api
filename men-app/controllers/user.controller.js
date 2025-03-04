import express from 'express'
import '../db/connection.js'

// userMagnament.registerUser = async (req, res) =>{
// }

export const loginUser = async (req, res) => {

}

export async function registerUser (req, res){

    const data = req.body;
    console.log(data)

    const user = new user();

    // Desar en una constant les dades que venen per POST
    // Crear una instància de l'Schema amb les dades rebudes
    // Desar les dades amb el mètode .save(). Aquesta operació és asíncrona
    // Enviar un missatge de confirmació
}

export async function updateUser (req, res){

}

export async function deleteUser (req, res){

}