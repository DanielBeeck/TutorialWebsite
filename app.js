const express = require("express");
const app = express();
const router = require('./routes/routes.js')

app.use (router);
app.set('view engine', 'ejs');
app.set('views', 'views');


app.listen(8020, function(){
  console.log('app lauscht auf http://localhost:8020');
});


