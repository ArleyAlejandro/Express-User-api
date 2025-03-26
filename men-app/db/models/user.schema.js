import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    surName: { type: String, required: [true, "Surname is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    pass: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

// Middleware para validar y hashear la contraseña antes de guardar
userSchema.pre("save", async function (next) {

  // Validar la contraseña antes de hashearla
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
  if (!passwordRegex.test(this.pass)) {
    throw new Error("Password does not meet complexity requirements");
  }

  this.pass = await bcrypt.hash(this.pass, 10);
  next();
});

const userModel = model("User", userSchema);
export default userModel;
