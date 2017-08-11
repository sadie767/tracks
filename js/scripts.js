$(document).ready(function() {
  $("#formOne").submit(function(event) {

  $("#Ruby").hide();
  $("#PHP").hide();
  $("#Java").hide();

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
