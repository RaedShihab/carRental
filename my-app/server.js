const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const path = require('path')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

const db = require('./database.js')
// Test Database 
db.authenticate()
.then(()=> console.log('DataBase connected...'))
.catch(err => console.log('Error: '+ err))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.use(express.static('public'))

app.post("/test", (req,res)=>{
    console.log(req.body.any)
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
  const port = process.env.PORT || 3001;
  app.listen(port, ()=> console.log(`listining on port ${port}`))