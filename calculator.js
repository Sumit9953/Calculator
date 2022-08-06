const express=require("express");
const bodyparser=require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function (req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1+n2;
  res.send("The result of the calculator is " + result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html")
});
app.post("/bmicalculator",function(req,res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / Math.pow(height,2);
  res.send("your bmi is " + bmi);
});

app.listen(3000,function () {
  console.log("server is running on port 3000");
});
