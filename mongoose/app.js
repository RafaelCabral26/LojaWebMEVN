//chKxItwBidbREsQv
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const corsOption = {
    origin: "http://localhost:3000"
}
app.use(cors());
app.use(bodyParser.json())


const conn = require("../db/connmong");
conn();

app.get('/', (req, res) => res.send('App is working'))

const routes =  require("./apiroutes/routes")
app.use("/api", routes);




const PORT = process.env.PORT || 3000;

app.listen(PORT,function() {
    console.log(`Server rodando na porta: ${PORT}`)
})
