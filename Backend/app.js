//Dot Env
require("dotenv").config();

//Express
const express = require ("express");
const app = express();

//Middleware
app.use(express.json());

//Port
const Port = process.env.PORT || 5000;

//DB Connection
const mongoose =require ("mongoose");

async function dbConnection() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log ("DB Connected");
    } catch (error) {
        console.log(error);
    }
    
}
dbConnection();

//Listen "Run Server"
app.listen(Port, ()=> {
    console.log (`Server is Running at port ${Port}`);
})
