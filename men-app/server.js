import express from "express";
import "./db/connection.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user_routes.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("API funcionando!.");
});

app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});

// app.delete("/users/login", updateUserUser)
// app.put("/users/login", deleteUserUser)
