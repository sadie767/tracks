$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#home").hide();
    $("#Ruby").hide();
    $("#PHP").hide();
    $("#Java").hide();
    var name = prompt("Enter your name");
    alert(name + " you'd make a great decision attending Epicodus!")
    var question4 = $("#question4").val();

    if (question4 === "democrat") {
      $("#Ruby").show();
    } else if (question4 === "republican") {
      $("#PHP").show();
    } else {
      $("#Java").show();
    }
    event.preventDefault();
  });
});
