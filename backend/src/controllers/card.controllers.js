import { Card } from "../models/cards.model.js";


export const getAllCards = async (req,res) => {
    try {
        const cards = await Card.find();
        console.log( cards);
        
        res.status(200).json({ message: 'successfully fetched all data.', card: cards});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const createNewCard = async (req,res) => {
    try {
        const {title,description} = req.body;
        const newCard = new Card({title,description})
        await newCard.save();
        
        res.status(201).json({ message: 'Card created successfully', card: newCard });
    } catch (error) {
        res.status(500).json({ message: 'Card created failed', error: error.message });
    }
}

export const getSpecficCard = async (req,res) => {
        try {
            const { title } = req.params;
            const card = await Card.findOne({ title });
            if (card) {
                res.status(200).json(card);
            } else {
                res.status(404).json({ message: "Card not found" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}