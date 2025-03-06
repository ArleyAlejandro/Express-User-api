// import express from 'express'
// import userModel from '../models/user.js'; 
// import '../db/connection.js'

// userMagnament.registerUser = async (req, res) =>{
// }

// export const loginUser = async (req, res) => {

// }

export async function registerUser(req, res) {
    // res.json('Test 4')

    try {

        const datos = req.body;
        console.log(datos);

        // Agafar les dades del body enviades des del client
        
        
        // const newUser 
        
        
        // S'assigna una instància del model
        // validar les dades de l'usuari utilitzant el mètode `validateSync()`,
        // que comprova si les dades de l'usuari compleixen amb els esquemes de validació definits en el model.
        // Si no es compleix, generar una excepció
        // if (
            // Consulta a la base de dades per si l'email existeix)) {
        // Si existeix genera una excepció
        // throw "{register: 'User already exists'}";
        // }else{
        // Xifrar el password mijançant bcrypjs (operació asíncrona)
        // Es desa a la base de dades (operació asíncrona)
        // S'envia un missatge de confirmació
        // }
        } catch (error) {
        // Es retorna l'objecte amb els errors
        req.status(400).json(error);
        };
}


// export async function updateUser (req, res){

// }

// export async function deleteUser (req, res){

// }