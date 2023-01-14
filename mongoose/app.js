//chKxItwBidbREsQv
// rafaelmevn: LmJCiMJll3vaUC2n3
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

// import { config } from "dotenv";
// import express from "express" ;
// import cors from "cors";
// import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended:true }))
app.use(express.json())


const conn = require("./db/connmong");
conn();

app.get('/', (req, res) => res.send('App is working'))

const routes =  require("./apiroutes/routes");
const { application } = require("express");
app.use("/api", routes);




const PORT = process.env.PORT || 3000;

app.listen(PORT,function() {
    console.log(`Server rodando na porta: ${PORT}`)
})
