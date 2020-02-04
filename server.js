const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.post('/', function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.mass);

  var result = weight / (Math.pow(height, 2));

  res.send('Your BMI is equals to' + result);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});