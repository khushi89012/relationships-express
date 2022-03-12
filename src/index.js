
const express = require("express");


//importing controlllers
const bookController = require("./controllers/book.controller");
const authorController = require("./controllers/author.controller");
const sectionController = require("./controllers/section.controller");


//connect to the database
const connect = require("./configs/db")

const app = express();



app.use(express.json());  



//using all the controllers
app.use("/books", bookController);
app.use("/authors", authorController);
app.use("/sections", sectionController);



app.listen(2001, async function () {

    try{
        await connect();
        console.log("listening on port 2001");
    } catch(e){
        console.log("error is ", e.message);
    }
    
});