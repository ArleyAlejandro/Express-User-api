import express from 'express'
import './db/connection.js'
import { deleteUser, loginUser, registerUser, updateUser } from './controllers/user.controller.js'

const app = express()

app.get('/', (req, res) => {
    res.json('Test 2')
})
app.listen(8080, () => {
    console.log('Server is running on port 8080.');
});

app.post("/users/login", loginUser)
app.post("/users/register", registerUser)
// app.delete("/users/login", updateUserUser)
// app.put("/users/login", deleteUserUser)