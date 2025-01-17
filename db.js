const mongoose = require("mongoose");

//MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'


//Set up Mongoose Connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get Default connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;


//Define Event listeners for database connection
db.on('connected', ()=>{
    console.log("Connected to MongoDB");
})

db.on('error', (err)=>{
    console.log("MongoDB connection error", err);
})

db.on('disconnected',()=>{
    console.log("MongoDB disconnected");   
})

//Export a databse connection
module.exports = db;