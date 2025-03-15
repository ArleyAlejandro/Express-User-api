import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token; 

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. Token no encontrado." });
  }

  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(403).json({ error: "Token inválido o expirado." });
  }
};
