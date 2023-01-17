//import express from "express"
//import { Router } from "express"
//import mongoose from "mongoose";
//import { config } from "dotenv";
//import cors from "cors"
//import { userController } from "./controller/userController.js";

const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const dotenv = require("dotenv")
const cors = require("cors")
const userController = require("./controller/userController")

const app = express();
dotenv.config();
async function conn() {

    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado ao BD")
    }catch(error) {
        console.log(error);
    }
}
conn();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.use(cors())
app.get("/", (req,res) => {
    return res.status(201).json({msg: "GET com sucesso"})
})
app.post("/usuario/add", (req,res) => userController.add(req,res))
app.get("/usuario/list", (req, res) => userController.getAll(req,res))


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Escutando porta")
})