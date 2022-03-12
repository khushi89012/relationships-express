
const express = require("express");

const Author = require("../models/author.model");

const router = express.Router();


/*
    work with authors collection

    GET => get /authors
    POST => post /authors
    GET SINGLE ITEM => get /authors/:id
    UPDATE SINGLE ITEM => patch /authors/:id
    DELETE SIGNLE ITEM => delete /authors/:id

*/

//post one author
router.post("", async (req, res) => {
    try{
        const author = await Author.create(req.body);

        return res.status(201).send(author)

    } catch(e){
        return res.status(500).send({message: e.message});
    }
});

//get all authors
router.get("", async (req, res) => {
    try{
        const authors = await Author.find().lean().exec();

        return res.status(200).send(authors);

    } catch(e){
        return res.status(500).send({message: e.message});
    }
});




module.exports = router;