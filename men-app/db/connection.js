import mongoose from "mongoose";
mongoose.set('sanitizeFilter', true);
mongoose.set('strictQuery', false)

const
{MONGODB_USER_NO_ROOT,MONGODB_PASSWORD_USER_NO_ROOT,MONGODB_HOST,MONGODB_DOCKER_PORT,MONGODB_DB} = process.env;
console.log(process.env);

const url =
`mongodb://${MONGODB_USER_NO_ROOT}:${MONGODB_PASSWORD_USER_NO_ROOT}@${MONGODB_HOST}:${MONGODB_DOCKER_PORT}/${MONGODB_DB}?authSource=${MONGODB_DB}`
console.log(url);

export const connectDB = async () => {
try {
    const connection = await mongoose.connect(url)
    console.log(`Database is connected: ${connection.connection.host}`)
}
catch (error) {
    console.log(error)
    process.exit(1)
}
}

connectDB()
