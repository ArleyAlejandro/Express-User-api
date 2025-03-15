import "../db/connection.js";

export const createNote = async (req, res) => {
    try{
        const data = req.body;
        console.log(data)

        if (data) {
            return res.status(200).json({"message": "All good!"})
        }
    }catch(error){
        res
        .status(400)
        .json({ error: "Error al crear nota el usuario", details: error });
    }
}