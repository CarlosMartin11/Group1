//This file is saved inside the 'api' folder.

// import all packages installed
var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

//Create an instance of express app
var app=Express();
//Make use of the CORS module
app.use(cors());

//Indicate the connection string from mongodb
var CONNECTION_STRING = "mongodb+srv://khenluat18:khen1818@cluster0.zauesdr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Indicate the name of the database
var DATABASENAME = "finals";

//instantiate the mongodbclient
var database;

//create a listener
app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log(`Yay! Now connected to Cluster`);
    })
})


//ROUTES TO ALL ACTIONS

//get all dbase data
app.get('/api/todo/GetTodo',(req, res) => {
    database.collection("todo").find({}).toArray((error,result)=>{
        res.send(result);
    })
})


app.post('/api/todo/AddTodo', multer().none(), async (req, res) => {
    try {
        const numOfDocs = await database.collection("todo").countDocuments();
        await database.collection("todo").insertOne({
            id: (numOfDocs + 1).toString(),
            task: req.body.task,
            description: req.body.description,
            due: req.body.due
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding Task:", error);
        res.status(500).json({ error: "Failed to add Task" });
    }
});


app.delete('/api/todo/DeleteTodo', (req, res)=>{
    database.collection("todo").deleteOne({
        id:req.query.id
    });
    res.json("Deleted successfully!");
})