$(document).ready(function() {
  $("#formOne").submit(function(event) {

  $("#Ruby").hide();
  $("#PHP").hide();
  $("#Java").hide();

  var question1 = $("#question1").val();
  var question2 = $("#question2").val();
  var question3 = $("question3").val();
  var question4 = $("question4").val();
  var question5 = $("question5").val();

  var name = prompt("enter name");
  alert(name + " you'd make a great decision attending Epicodus!")

  if (question1 === "social" && question2 === "coffee" && question3 === "at-home" && question4 === "democrat" && question5 === "New-Wave") {
    $("#Ruby").show();
  } else if (question1 === "social" && question2 === "coffee" && question3 === "at-home" && question4 === "democrat" && question5 === "pop-Music") {
    $("#PHP").show();
  } else if (question1 === "social" && question2 === "coffee" && question3 === "at-home" && question4 === "republican" && question5 === "New-Wave") {
    $("#Java").show();
  } else if (question1 === "social" && question2 === "coffee" && question3 === "theater" && question4 === "republican" && question5 === "New-Wave") {
    $("#Ruby").show();
  } else if (question1 === "social" && question2 === "water" && question3 === "theater" && question4 === "republican" && question5 === "New-Wave") {
    $("#PHP").show();
  } else if (question1 === "social" && question2 === "water" && question3 === "theater" && question4 === "republican" && question5 === "New-Wave") {
    $("#Java").show();
  } else if (question1 === "anti-social" && question2 === "water" && question3 === "theater" && question4 === "republican" && question5 === "New-Wave") {
    $("#Ruby").show();
  } else {
    $("#Java").show();
  }
  event.preventDefault();
});
});
