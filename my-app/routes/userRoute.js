// making router
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// const db = require('../database.js');
const User = require("../models/Model");
const { Ragister } = require("../models/Model");
const { Listcar } = require("../models/Model");

process.env.SECRET_KEY = "secret";
// test
router.get("/", (req, res) =>
  User.findAll()
    .then(dataFromTable => {
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

// save user data inside database for signup:
router.post("/add", (req, res) => {
  //console.log(req.body);
  const data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    phonenumber: req.body.phonenumber
  };
  // insert user data into model i've create it inside data base
  Ragister.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      //console.log('Here',user);
      // check if user already exist or it is a new user
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          data.password = hash;
          Ragister.create(data)
            .then(user => {
              //console.log('Here it is',user)
              res.json({ status: user.email + "user now registerd" });
              //console.log("user now registerd");
            })

            .catch(err => {
              res.send("error: " + err);
            });
        });
        // now if user is already exist
      } else {
        res.json({ error: "User already exist " });
        console.log("User already exist");
      }
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

// login user
router.post("/login", (req, res) => {
  Ragister.findOne({
    where: {
      email: req.body.email
    }
  })
    // check for user password
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.json({ message: "succes", id: user });
          //console.log("success login");
        } else {
          res.json("failed");
          //console.log("err with password");
        }
      } else {
        res.status(400).json({ error: "User does not exsist" });
        console.log("error with email");
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

// search for car by city and area and reture the cars are exist in this area
router.post("/search", (req, res) => {
  Listcar.findAll({
    where: {
      address: req.body.address,
      area: req.body.area
    }
  }).then(car => {
    //console.log("here", car);
    let filterdData = [];
    for (let i = 0; i < car.length; i++) {
      filterdData.push(car[i].dataValues);
    }
    //console.log('Array',filterdData);
    res.json({ filterdData });
  });
});
// returning car data details:
router.post("/carDetails", (req, res) => {
  console.log(req.body, "herrr");
  Listcar.findOne({
    where: {
      id: req.body.id,
      ragisterId: req.body.ragisterId
    }
  }).then(car => {
    console.log("hh", car.dataValues);
    res.json({ car: car.dataValues });
  });
});
// adding car details and save it in database
router.post("/changcar", (req, res) => {
  const ragisterId = parseInt(req.body.user_id);
  let companyName = "";
  let data = {};
  Ragister.findOne({
    where: {
      id: ragisterId
    }
  }).then(user => {
    //console.log(companyName)
    if (user) {
      companyName = companyName + user.firstname + user.lastname;
      // console.log(companyName)
      data = {
        address: req.body.address,
        area: req.body.area,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        ragisterId: ragisterId,
        carCode: req.body.carCode,
        companyName: companyName,
        wifi: req.body.wifi,
        autoorgear: req.body.autoorgear,
        pricePerHour: req.body.pricePerHour,
        capacity: req.body.capacity,
        status: req.body.status,
        companyLocationLat: req.body.companyLocationLat,
        companyLocationLong: req.body.companyLocationLong
      };
      // console.log('o',data)
      //adding data to the model inside database
      if (data.companyName !== null) {
        Listcar.create(data)
          .then(user => {
            res.json({ status: user + "Car now added" });
            console.log(user, "Caaaaaaaaaaaaaaaaar added");
          })
          .catch(err => {
            console.log("here is the error", err);
            res.send("error:" + err);
          });
      }
    }
  });
});
// company can update car information
router.put("/updatecar", (req, res) => {
  Listcar.update(
    {
      address: req.body.updateaddress,
      year: req.body.updateyear,
      make: req.body.updatemake,
      model: req.body.updatemodel,
      ragisterId: req.body.user_id,
      carCode2: req.body.carCode2
    },
    {
      where: {
        carCode: req.body.carCode2,
        ragisterId: req.body.user_id
      }
    }
  )
    .then(data => {
      //   console.log('d',data)
      res.json({ data });
    })
    .catch();
});
// update the status of the car after user book it
router.put("/bookCar", (req, res) => {
  Listcar.update(
    {
      status: "Booked"
    },
    {
      where: {
        id: req.body.id,
        ragisterId: req.body.ragisterId
      }
    }
  )
    .then(data => {
      //console.log("dd", data);
      res.json({ data });
    })
    .catch();
});
// company can delete the car
router.delete("/deletecar", (req, res) => {
  Listcar.destroy({
    where: {
      carCode: req.body.carCode3,
      ragisterId: req.body.user_id
    }
  })
    .then(data => {
      //console.log("deeeel", data);
      res.json({ data: "data deleted" });
    })
    .catch();
});

module.exports = router;
