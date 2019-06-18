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
console.log(req.body);
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
       //console.log('Here',user);
       if(!user) {
           bcrypt.hash(req.body.password, 10, (err,hash)=> {
               data.password = hash
               Ragister.create(data)
               .then(user => {
                   //console.log('console HHHHHHhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhHHere',user)
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
            res.json({message:'succes',id:user.id})
            console.log('success login')
        } else {
            res.json('failed')
            console.log('err with password')}

            } else {
                res.status(400).json({error: "User does not exsist"})
                console.log('error with email')
            }
        })
        .catch(err => {
            res.status(400).json({error: err})
            

        })

 })

    // search for car and return some information to client:

 router.post('/search', (req,res)=> {
  Listcar.findAll({
      where : {
          address: req.body.address,
      }
  })
   .then(car => {
       //console.log('hhhhhhhhhhhhhhh',car)
       let filterdData = [];
       for(let i = 0; i<car.length;i++) {
          filterdData.push(car[i].dataValues)
       }
       //console.log('Array',filterdData);
       res.json({filterdData})
 })
 })

 router.post('/changcar', (req,res)=> {
    const  ragisterId= parseInt(req.body.user_id)
let companyName = '';
let data ={};
Ragister.findOne({
    where : {
        id : ragisterId
    }
}).then(user => {
 
//console.log(companyName)
if(user) {
    companyName = companyName + user.firstname + user.lastname
    // console.log(companyName)
    data= {
    address: req.body.address,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    ragisterId: ragisterId,
    carCode: req.body.carCode,
    companyName: companyName,
    wifi: req.body.wifi,
    autoorgear: req.body.autoorgear,
    pricePerHour: req.body.pricePerHour,
    capacity: req.body.capacity
}
console.log('here is the data',data)
if(data.companyName !== null) {
Listcar.create(data)
     .then(user => {
        res.json({status: user + 'Car now added'})
     console.log( user,'Caaaaaaaaaaaaaaaaar added')
         })
      .catch(err => {
          console.log( 'here is the error',err)
          res.send('error:'  +err)
          
      })
    }
    }
 
})
    })

    router.put('/updatecar', (req,res)=> {
    Listcar.update(
        { address: req.body.updateaddress,
          year: req.body.updateyear,
          make: req.body.updatemake,
          model: req.body.updatemodel,
          ragisterId: req.body.user_id,
          carCode2: req.body.carCode2
        },
        { where : {
            carCode: req.body.carCode2,
            ragisterId: req.body.user_id,
        }         }
      )
      .then(data => {
          console.log('ddddddd',data)
          res.json({data})
      })
      .catch()
    })

    router.delete('/deletecar', (req,res)=> {
    Listcar.destroy(
        {
            where: {
            carCode: req.body.carCode3,
            ragisterId: req.body.user_id    
        }

        }
        
    ).then(data => {
        console.log('dddddddeeeelllll',data)
        res.json({data: 'data deleted'})
    }).catch()

    })

    
    

module.exports = router;  