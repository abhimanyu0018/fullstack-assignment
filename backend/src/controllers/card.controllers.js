import { Card } from "../models/cards.model.js";


export const getAllCards = async (req,res) => {
    try {
        const cards = await Card.find();
        // console.log( cards);
        
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

export const getSpecificCard = async (req, res) => {
  try {
    const { title } = req.params;
    
    // Use a case-insensitive regular expression to match the title
    const regex = new RegExp(title, 'i');
    
    const card = await Card.findOne({ title: regex });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    console.log(card);
    

    res.status(200).json({ card });
  } catch (error) {
    console.error('Error in getSpecificCard:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};