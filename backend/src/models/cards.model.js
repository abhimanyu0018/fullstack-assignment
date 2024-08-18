import mongoose from "mongoose"

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    description : {
        type: String,
        require: true
    },
   
}, {
    timestamps: true
})


export const Card = mongoose.model("Card",cardSchema)