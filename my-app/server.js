const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");

// const cors = require('cors');
// const db =require("./database");
const app = express();
// const exphbs = require('express-handlebars') 
const bodyparser = require('body-parser')
//  const path = require('path')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/user', require('./routes/userRoute.js'))

  const port = process.env.PORT || 3001;
  app.listen(port, ()=> console.log(`listining on port ${port}`))

// add new user: 
app.post('/signup', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  User.create({username: username, password: hashedPassword}).then(function(){
      return res.status(HTTP_CREATED).send('Sign up successful');
  }).catch(function(err){
      if(err.name === "SequelizeUniqueConstraintError"){
          return res.status(HTTP_BAD_REQUEST).send('This username is already taken');
      }
      return res.status(HTTP_SERVER_ERROR).send('Server Error');
  });
});







  //////////////////////////some tests:
app.post("/test", (req,res)=>{
  const front = req.body
  res.send(front)
});

app.get("/api/courses", (req,res)=>{
  res.send([1,2,55555])
});

app.get('/api/courses/:id', (req,res)=> {
  //   console.log("console here",req)
    res.send(req.params.id)
});
///////////////////////////////////////////////////////
//  app.use(express.static('public'))

// Handelebars
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// set static folder
// app.use(express.static(path.join(__dirname, './public')));
// User Routes 