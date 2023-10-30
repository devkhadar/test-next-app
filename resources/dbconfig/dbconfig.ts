import mongoose from "mongoose";

export const connect = async () => {
    try {
        mongoose.connect("mongodb+srv://DevKhadar:Devkhadar457@cluster0.urmgf9s.mongodb.net/")
        console.log("```````````",process.env.MONGO_URL)
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("MONGO DB Connected")
        });
        connection.on("error", (err) => {
            console.log("Error at MONGODB", err)
        })
    } catch (ex) {
        console.log(ex)
    }
}