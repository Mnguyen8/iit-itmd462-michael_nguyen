//Michael Nguyen
//ITMD 462
//Week 7 Homework

var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var path = require('path');

var c1 = {"suit":"spades", "rank":"ace"};
var c2 = {"suit":"heart", "rank":"ace"};
var c3 = {"suit":"spades", "rank":"3"};
var c4 = {"suit":"club", "rank":"king"};
var c5 = {"suit":"club", "rank":"5"};

//array of cards in hand
var h1 = [c1,c2,c3,c4,c5];

var c11 = {"suit":"heart", "rank":"king"};
var c12 = {"suit":"heart", "rank":"ace"};
var c13 = {"suit":"spades", "rank":"3"};
var c14 = {"suit":"club", "rank":"king"};
var c15 = {"suit":"club", "rank":"1"};

//array of cards in hand
var h2 = [c11,c12,c13,c14,c15];

var c21 = {"suit":"diamond", "rank":"ace"};
var c22 = {"suit":"heart", "rank":"2"};
var c23 = {"suit":"spades", "rank":"3"};
var c24 = {"suit":"diamond", "rank":"jack"};
var c25 = {"suit":"club", "rank":"4"};

//array of cards in hand
var h3 = [c21,c22,c23,c24,c25];

var hands =[h1,h2,h3]; //array of objects that holds the information for hands

app.use(bodyParser.json()); //tells system to use json

app.get('/hands/:handId', function(req, res){
	var iId = req.params.handId;

	var arrayPos = iId - 1;
	if(!hands[arrayPos]){
	 	res.status(404)
	 	res.json({"Error" : "handId cannot be found: " + iId})
	 }
	 else{
	 	var handString = JSON.stringify(hands[arrayPos])
	 	res.send("Id: " + iId+ " cards: " + handString)
	 	
	 }
})

app.get('/hands/:handId/cards', function (req, res) {
  var iId = req.params.handId;
  var arrayPos = iId - 1;
  if(!hands[arrayPos]){
	 	res.status(404)
	 	res.json({"Error" : "handId cannot be found: " + iId})
	 }
  else {
    res.json(hands[arrayPos])
  }
})

app.get('/hands', function(req, res){
 res.json(hands)
})

app.post('/hands', function (req, res){
  var id = {"id" : hands.length + 1};
  var newHand = req.body;
  newHand.id = id.id;
  hands.push(newHand)
  res.json(id)
})

app.put('/hands/:handId', function (req, res){
  var iId = req.params.handId;
  var arrayPos = iId - 1;
  if(!hands[arrayPos]){
	 	res.status(404)
	 	res.json({"Error" : "handId cannot be found: " + iId})
	}
  else {
    var id = {"id" : arrayplace + 1};
    var newHand = req.body;
    newHand.id = id.id;
    hands[arrayPos] = newHand;
    res.json("handId: " + iId + " has updated")
  }
})

app.listen(3000, function () {
      console.log('App listing on port 3000')
    })
