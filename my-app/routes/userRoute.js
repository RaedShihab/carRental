const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// const db = require('../database.js');
const User = require('../models/Model');
const {Ragister} = require('../models/Model');
const {Listcar} = require('../models/Model');

process.env.SECRET_KEY = "secret"
// git all users 
router.get('/', (req,res)=>
User.findAll()
.then(dataFromTable=>{
    res.sendStatus(200);
})
.catch(err=> console.log(err))
)
// save user data inside database:
router.post('/add', (req,res)=> {

 const data = {
     firstname: req.body.firstname,
     lastname: req.body.lastname,
     password: req.body.password,
     email: req.body.email,
     phonenumber: req.body.phonenumber
 }
   // insert into model
  Ragister.findOne({
      where : {
          email: req.body.email
      }
  })
   .then(user => {
       console.log('Here',user);
       if(!user) {
           bcrypt.hash(req.body.password, 10, (err,hash)=> {
               data.password = hash
               Ragister.create(data)
               .then(user => {
                   console.log('console HHHHHHhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhHHere',user)
                 res.json({status: user.email + 'user now registerd'})
                 console.log('user now registerd')
               })
               
               .catch(err => {
                   res.send('error: '+ err)
               })
           })
       } else {
           res.json({error: "User already exist "})
           console.log('User already exist')
       }
   })
   .catch(err => {
       res.send('error:'  +err)
   })
   
 })
// login user
 router.post('/login', (req, res) => {

    Ragister.findOne({
        where: {
            email : req.body.email
        }
    })
    .then(user => {
        if(user) {
         if(bcrypt.compareSync(req.body.password, user.password)) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            res.send(token)
            console.log('success login')
        }
            } else {
                res.status(400).json({error: "User does not exsist"})
                console.log('failed login')
            }
        })
        .catch(err => {
            res.status(400).json({error: err})
            

        })

 })

 // add car information inside database: 
 router.post('/list-your-car', (req,res)=> {

    const data = {
        address: req.body.address,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        phonenumber: req.body.phonenumber
    }
      // insert into model
     Listcar.create(data)
     .then(user => {
        res.json({status: user + 'Car now registerd'})
      console.log( user,'Caaaaaaaaaaaaaaaaar now registerd')
         })
      .catch(err => {
          res.send('error:'  +err)
      })
      
    })

module.exports = router;  