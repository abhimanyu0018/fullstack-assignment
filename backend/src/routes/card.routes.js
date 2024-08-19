import express from "express";
import { createNewCard, getAllCards, getSpecificCard } from "../controllers/card.controllers.js";

const cardRouter = express.Router()

cardRouter.post('/cards', createNewCard)


cardRouter.get('/cards', getAllCards)


cardRouter.get('/cards/:title', getSpecificCard)


export default cardRouter;