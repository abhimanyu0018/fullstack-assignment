import express from "express"
import cors from "cors"

const app = express()



app.use(cors(
    {
        origin: "*",
        credentials: true,
    }
))

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes --
app.get('/ping', (req,res) => {
    console.log("working");
    
    return res.status(200).json ({msg: "working"})
})

import cardRouter from "./routes/card.routes.js";

app.use("/api",cardRouter)


export default app;