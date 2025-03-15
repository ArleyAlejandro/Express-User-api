import express from "express";
import "./db/connection.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.routes.js"
import noteRoutes from "./routes/notes.routes.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});

// app.delete("/users/login", updateUserUser)
// app.put("/users/login", deleteUserUser)
