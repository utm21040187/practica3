import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controllers.js";

dotenv.config()


mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("La base de datos jala")
})
.catch((error)=>{
    console.log("No jalo la base de datos", error)
})

const app= express()

app.use(cors())

app.listen(4000, ()=>{
    console.log("Se escucha sabroso")
})

test()