const express = require('express');
const router = express.Router();
const db = require('../database');
const User = require('../models/Model')

router.get('/', (req,res)=>
User.findAll()
.then(user=>{
    console.log(user);
    res.sendStatus(200);
})
.catch(err=> console.log(err))
);


module.exports = router;  