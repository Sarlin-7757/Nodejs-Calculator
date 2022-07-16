const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req , res){
    // res.send("hello saransh");
    res.sendFile(__dirname + "/index.html");
});

app.post('/' , function(req , res){

var number1 = Number(req.body.num1);
var number2 = Number(req.body.num2);

var result = number1+number2;

    res.send("The result of the calculation is " + result );
})

app.listen(3000 , function(){
    console.log("server has started on port 3000");
});

