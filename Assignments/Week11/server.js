/*
Michael Nguyen
ITM 462
Week 11 assignment
*/

const express = require('express')
const bodyParser = require('body-parser') 
const app = express()
var users = [ ]; //array for users

  app.use(bodyParser.json()); //parses json

  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,  X-HTTP-Method-Override, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
  });

  //starts server
  app.listen(3000, function() {
    console.log("Listening on port 3000!")
  });


  app.get('/users/:userId', function(req, res){
    var uId = req.params.userId;
    var index = uId - 1;
    if(!users[index]){ //checks to see if there is data in user array at that index
      res.status(404);
      res.json({"message":"userId not found: " + userId});
    }
    else{
      res.status(200);
      res.json(users[index].user);
    }
  });

  //gets
  app.get('users/:userId/reminders', function(req, res){
    var uId = req.params.userId;
    var index = uId -1;
    if(!users[index]){
      res.status(404);
      res.json({"message":"userId not found: "+uId});
    }
    else{
      var rIndex = users[index].reminders.length -1; //index for reminder
      var indvReminder = []; //array for reminder
      users[index].reminders.forEach(function(object){  //traverse the array and copys it into indvReminder used this instead of for loop
        indvReminder.push(object.reminder);
      });
      res.status(200);
      res.json(indvReminder); //parses indvReminder into json
    }
  });

  app.get('users/:userId/reminders/:reminderId', function(req, res){
    var uId = req.params.userId;
    var index = uId -1;
    var rId = req.params.reminderId;
    var rIndex = rId -1;

    if(!users[index].reminders[rIndex]){
      res.status(404);
      res.json({"message":"reminderId not found: "+rId});
    }
    else{
      res.status(200);
      res.json(users[index].reminders[rIndex].reminder);
    }
  });

//posts
  app.post('/users', function(req, res){
    var uId = {'id' : users.length +1};
    var newUser = req.body;
    newUser.uId = uId.uId;
    newUser.reminders =[ ];
    users.push(newUser);
    res.status(200);
    res.json(uId);
  });

  app.post('users/:userId/reminders', function(req, res){
    var uId = req.params.userId;
    var index = uId -1;
    var date = new Date(); //gets the date
    if(!users[index]){
      res.status(404);
      res.json({"message":"userId not found: "+uId});
    }
    else{
      var rId = {"id" : users[index].reminders.length + 1}; //gets id for reminder from the user array
      var newReminder = req.body.newReminder;
      newReminder.rId = rId.rId; //returns the id
      newReminder.reminder.created = date;
      users[index].reminders.push(newReminder);
      res.status(200);
      res.json(rId);
    }
  });

//deletes
  app.delete('/users/:userId', function (req, res) {
  var uID = req.params.userId;
  var index = uID - 1;
  if(!users[index]){
    res.status(404);
    res.json({"message" : "userId not found: " + uID})
  }
  else {
    delete users[index]; //deletes the data in array
    res.status(204);
    res.end(); //send message that says that there is no content because of the status 204
  }
});

  app.delete('/users/:userId/reminders', function (req, res) {
  var uID = req.params.userId;
  var index = uId - 1;
  if(!users[index]){
    res.status(404)
    res.json({"message" : "userId not found: " + uID})
  }
  else {
    users[index].reminders = [ ]; //fills user[index] with blank array
    res.status(204);
    res.end();
  }
});

app.delete('/users/:userId/reminders/:reminderId', function (req, res) {
  var uID = req.params.userId;
  var index = uId -1;
  var rId = req.params.reminderId;
  var rIndex = rId - 1;
  if(!users[index].reminders[rIndex]){
    res.status(404);
    res.json({"message" : "reminderId not found: " + rID})
  }
  else {
    delete users[index].reminders[rIndex]; //delets the reminder
    res.status(204); 
    res.end();
  }
});
