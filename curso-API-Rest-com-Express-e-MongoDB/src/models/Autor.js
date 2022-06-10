import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
