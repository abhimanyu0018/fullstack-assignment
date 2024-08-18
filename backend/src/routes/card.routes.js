import express from "express";
import { createNewCard, getAllCards, getSpecficCard } from "../controllers/card.controllers.js";

const cardRouter = express.Router()

cardRouter.post('/cards', createNewCard)


cardRouter.get('/cards', getAllCards)


cardRouter.get('/cards/:title', getSpecficCard)


export default cardRouter;