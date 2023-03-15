const express = require("express");
const app = express();

// define the port
const PORT = 3000;

// API request: Get default route
app.get("/",(req, res)=>{
    console.log("I am running in my default location");

    res.send("Hello developers!!")
});

// API request: Get trainings route
app.get("/trainings",(req, res)=>{
    console.log("Trainings Routes");
    // Binding the json objects
    res.send([
        {
            id: 1,
            training_name: "Azure training"
        },
        {
            id: 2,
            training_name: "GCP training"
        },
        {
            id: 3,
            training_name: "AWS training"
        }
    ])
});

app.listen(PORT, ()=>{
    console.debug(`App is running on ${PORT}`);
})