const express = require('express');

// const db =require("./database");

const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
  });

app.use('/user', require('./routes/userRoute.js'))

  const port = process.env.PORT || 3001;
  app.listen(port, ()=> console.log(`listining on port ${port}`))











  

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