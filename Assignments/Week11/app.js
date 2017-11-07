/*
Michael Nguyen
ITM 462
Week 11 assignment
*/

$(document).ready(function() {
  "use strict";
  //request now becomes json
  $.ajaxSetup({
    contentType: "application/json; charset=utf-8"
  });

  // get /users
  var viewUser = function () {
    $.get("http://localhost:3000/users", function(data, status){
      var $output = $("<p>");
      $output.text(JSON.stringify(data));
      $(".output").html($output);
    });
    console.log("Viewing users.");
  }

  //get /users/:userID
  var searchUser = function ($id) {
    var $link="http://localhost:3000/users/" + $id;
    $.get($link, function(data, status){
      var $output = $("<p>");
      $output.text("Username: " + data.name + " Email: " + data.email);
      $(".output").html($output);
    });
    console.log("Searching user");
  }
  //post to /users
  var addUser = function ($name, $email) {
    var newUser =   {'user' : {
      "name" : $name,
      "email" : $email
    }};
    $.post("http://localhost:3000/users", JSON.stringify(newUser) , function(req, res){
      var $output = $("<p>");
      $output.text("New userID: " + req.id);
      $(".output").html($output);

    }, "json");
    console.log("Adding user");
  }
  //get /users/:userID/reminders
  var viewReminders = function ($id) {
    var $link="http://localhost:3000/users/" + $id + "/reminders";
    $.get($link, function(data, status){
      data.forEach(function (blah) {
        var $output = $("<li>");
        $output.text("Title: " + blah.title + " Description: " + blah.description + " Created: " + blah.created)
        $(".output").append($output);
      });
    });
    console.log("Viewing reminders.");
  }
  //post /users/:userID/reminders
  var addReminder = function ($title, $des, $id) {
    var newRemind  =   {"reminder" : {
      "title" : $title,
      "description" : $des
    }};
    $.post("http://localhost:3000/users/"+ $id +"/reminders", JSON.stringify(newRemind) , function(req, res){
      //console.log(req);
      var $output = $("<p>");
      $output.text("New reminderID: " + req.id);
      $(".output").html($output);
    });
    console.log("Adding reminders.");
  }
  //get /users/:userID/reminders/:reminderID
  var searchReminder = function ($iduser, $idrem) {
    var $link="http://localhost:3000/users/" + $iduser + "/reminders/" + $idrem;
    $.get($link, function(data, status){
      var $output = $("<p>");
      $output.text("Title: " + data.title + " Description: " + data.description + " Created: " + data.created);
      $(".output").html($output);
    });
    console.log("Searching reminder.");
  }
  //delete /users/:userID/reminders/:reminderID
  var deleteReminder = function ($iduser, $idrem) {
    var $link="http://localhost:3000/users/" + $iduser + "/reminders/" + $idrem;
    $.ajax({
      url: $link,
      type: 'DELETE',
      data: "{}",
      contentType: "json",
      success: function(req) {
        var $output = $("<p>");
        $output.text("reminderId: " + $idrem + " has been deleted");
        $(".output").html($output);
      }
    });
    console.log("DEleteting reminder.");
  }
  //delete /users/:userID
  var deleteUser = function ($iduser) {
    var $link="http://localhost:3000/users/" + $iduser;
    $.ajax({
      url: $link,
      type: 'DELETE',
      data: "{}",
      contentType: "json",
      success: function(req) {
        var $output = $("<p>");
        $output.text("userId: " + $iduser + " has been deleted");
        $(".output").html($output);
      }
    });
    console.log("Deleteing user.");
  }
  //delete /users/:userID/reminders
  var deleteReminders = function ($iduser) {
    var $link="http://localhost:3000/users/" + $iduser + "/reminders";
    $.ajax({
      url: $link,
      type: 'DELETE',
      data: "{}",
      contentType: "json",
      success: function(req) {
        var $output = $("<p>");
        $output.text("All reminders have been deleted for userID: " + $iduser);
        $(".output").html($output);
      }
    });    
    console.log("Deleting reminders,");
  }

  //clears all output and input
  $(".clear").on("click", function() {
    $(".output").html("");
    $(".input").val("");
  });

  //on-click functions that use functions from above
  $("#viewUser button").on("click", function() {
    viewUser();
  });

  $("#searchUser button").on("click", function() {
    var $holder1 = $(".searchUser");
    var $id = $holder1.val();
    $holder1.val("");
    searchuser($id);
  });

  $("#addUser button").on("click", function() {
    var $holder1 = $(".addName");
    var $holder2 = $(".addEmail");
    var $name = $holder1.val();
    var $email = $holder2.val();
    $holder1.val("");
    $holder2.val("");
    addUser($name, $email);
  });

  $("#viewReminders button").on("click", function() {
    var $holder1 = $(".viewReminder");
    var $id = $holder1.val();
    $holder1.val("");
    viewReminders($id);
  });

  $("#addReminder button").on("click", function() {
    var $holder1 = $(".addTitle");
    var $holder2 = $(".addDescription");
    var $holder3 = $(".userId");
    var $title = $holder1.val();
    var $des = $holder2.val();
    var $id = $holder3.val();
    $holder1.val("");
    $holder2.val("");
    $holder3.val("");
    addReminder($title, $des, $id);
  });

  $("#searchReminder button").on("click", function() {
    var $holder1 = $(".search");
    var $holder2 = $(".searchRem");
    var $iduser = $holder1.val();
    var $idrem = $holder2.val();
    $holder1.val("");
    $holder2.val("");
    searchReminder($iduser, $idrem);
  });

  $("#deleteReminder button").on("click", function() {
    var $holder1 = $(".delUser");
    var $holder2 = $(".delRemId");
    var $iduser = $holder1.val();
    var $idrem = $holder2.val();
    $holder1.val("");
    $holder2.val("");
    deleteReminder($iduser, $idrem);
  });

  $("#deleteUser button").on("click", function() {
    var $holder1 = $(".delUserId");
    var $iduser = $holder1.val();
    $holder1.val("");
    deleteUser($iduser);
  });
  
  $("#deleteAll button").on("click", function() {
    var $holder1 = $(".delAll");
    var $iduser = $holder1.val();
    $holder1.val("");
    deleteReminders($iduser);
  });
});
