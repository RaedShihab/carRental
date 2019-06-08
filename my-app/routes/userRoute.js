const express = require('express');
const router = express.Router();
// const db = require('../database.js');
const User = require('../models/Model')
// const Car = require('../models/Model')
// git all users 
router.get('/', (req,res)=>
User.findAll()
.then(dataFromTable=>{
    res.sendStatus(200);
})
.catch(err=> console.log(err))
)

router.get('/add', (req,res)=> {

 const data = {
     name: 'MO777777',
     lastname: 'Salah14444444'
 }
let {name, lastname} = data;
   // insert into model
   User.create({
       name,
       lastname
   })
   .then(user => res.redirect('/user'))
   .catch(err => this.console.log(err))
 })


module.exports = router;  