
const express = require("express");

const Book = require("../models/book.model");

const router = express.Router();


/*
    work with books collection

    GET => get /books
    POST => post /books
    GET SINGLE ITEM => get /books/:id
    UPDATE SINGLE ITEM => patch /books/:id
    DELETE SIGNLE ITEM => delete /books/:id

*/

//post one book
router.post("", async (req, res) => {
    try{
        const book = await Book.create(req.body);

        return res.status(201).send(book)

    } catch(e){
        return res.status(500).send({message: e.message});
    }
});

//get all books
router.get("", async (req, res) => {
    try{
        let books;
        let filter = {};

        //find all books written by an author
        if(req.query.author_id){
            
            filter.author_ids = req.query.author_id;
        }

        //find all books in a section
        if(req.query.section_id){
            
            filter.section_id = req.query.section_id;
        }

        //find books for an author inside a section 
        // use this url 
        //http://localhost:2001/books?author_id=61ff81a4af69d400de086d6d&section_id=61ff817faf69d400de086d63

        books = await Book.find(filter).lean().exec();  //lean() is for converting mongoose object to json object  // exec() is for complete promise

        return res.status(200).send(books);

    } catch(e){
        return res.status(500).send({message: e.message});
    }
});


//get single book
// router.get("/:id", async (req, res) => {
//     try{
//         const books = await Book.find().lean().exec();  //lean() is for converting mongoose object to json object  // exec() is for complete promise

//         return res.status(200).send(books);

//     } catch(e){
//         return res.status(500).send({message: e.message});
//     }
// });




module.exports = router;