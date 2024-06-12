const express = require('express')
const mongoose = require('mongoose');
const user = require('./router/userRoter')
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(user);
var port = process.env.PORT || 3000;
 
app.use((req, res, next)=>{
    console.log(req.url , req.method);
    next();
  });
 



//notfound  mw
app.use((req, res, next) => {
    res.status(404).json({ message: "page Not Found" })
})


// erroe mw
app.use(function(err, req, res, next) {
 
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  })
});


mongoose.connect('mongodb://127.0.0.1:27017/DbForDannf')
  .then(() => console.log('Database Connected!'));


app.listen(port, () => {
    console.log("server listening to port " + port)
})
