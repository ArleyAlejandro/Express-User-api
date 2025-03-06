import express from "express";
import "./db/connection.js";
import { registerUser } from "./controllers/user.controller.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Test 2");
});
// app.post("/users/login", loginUser)
app.post("/users/register", registerUser);

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});

// app.delete("/users/login", updateUserUser)
// app.put("/users/login", deleteUserUser)
