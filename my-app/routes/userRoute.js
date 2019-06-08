const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// const db = require('../database.js');
const User = require('../models/Model')
const Ragister = require('../models/Model')
process.env.SECRET_KEY = "secret"
// git all users 
router.get('/', (req,res)=>
User.findAll()
.then(dataFromTable=>{
    res.sendStatus(200);
})
.catch(err=> console.log(err))
)

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
       if(!user) {
           bcrypt.hash(req.body.password, 10, (err,hash)=> {
               data.password = hash
               Ragister.create(data)
               .then(user => {
                 res.json({status: user.email + 'user now registerd'})
                 console.log('user now registerd')
               })
               .catch(err => {
                   res.send('error: '+ err)
               })
           })
       } else {
           res.json({error: "User already exist"})
           console.log('User already exist')
       }
   })
   .catch(err => {
       res.send('error:'  +err)
   })
   
 })

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


module.exports = router;  