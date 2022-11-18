let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//  Model

let Author = require("../Models/author");

router.route("/add").post(async (req, res) => {
    try {
      const { title, author, cost, newbook } = req.body;
      
  
  
      let saveAcc = new Author({
        title, author, cost, newbook
      });
  
      const savedAcc = await saveAcc.save();
  
   return   res.json(savedAcc);

    } catch (err) {
     return  res.status(500).json(err);
    }
  });


  router.route("/get").get(async (req, res) => {
    try {
      
       Author.find((err, data) => {
        if (err) console.log(err);
        else return res.json(data);
      });
    

    } catch (err) {
     return res.status(500).json(err);
    }
  });


  router.route("/update").put(async (req, res) => {
    try {
      
        const {id} = req.body;

        console.log(id);
    let data  =   await Author.findByIdAndUpdate(
        { _id: id },
        {
          $set: req.body
        },
        { new: true }
      );
    
      return res.json(data)

    } catch (err) {
     return res.status(500).json(err);
    }
  });


  router.route("/delete").delete(async (req, res) => {
    try {
      
        const {id} = req.body;

        console.log(id);
    let data  =   await Author.findByIdAndDelete(
        { _id: id },
      );
    
      return res.json(data)

    } catch (err) {
     return res.status(500).json(err);
    }
  });
  module.exports = router;
