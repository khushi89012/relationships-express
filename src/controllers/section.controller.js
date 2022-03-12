
const express = require("express");

const Section = require("../models/section.model.js");

const router = express.Router();


/*
    work with sections collection

    GET => get /sections
    POST => post /sections
    GET SINGLE ITEM => get /sections/:id
    UPDATE SINGLE ITEM => patch /sections/:id
    DELETE SIGNLE ITEM => delete /sections/:id

*/

//post one section
router.post("", async (req, res) => {
    try{
        const section = await Section.create(req.body);

        return res.status(201).send(section)

    } catch(e){
        return res.status(500).send({message: e.message});
    }
});

//get all sections
router.get("", async (req, res) => {
    try{
        const sections = await Section.find().lean().exec();

        return res.status(200).send(sections);

    } catch(e){
        return res.status(500).send({message: e.message});
    }
});


module.exports = router;