$(document).ready(function() {

  //PUT to be able to edit a team
  //class = put-form on edit.ejs form to edit team
  $(".put-form").on("submit", function(e){
    e.preventDefault();
    var teamUrl = $(this).attr("action");
    var teamData = $(this).serialize();

    $.ajax({
      method: "PUT",
      url: teamUrl,
      data: teamData
    }).done(function(data) {
      alert("Team Successfully Edited!");
      window.location = "/teams";
    });//end ajax function
  });//end PUT

  //Delete to delete a team
  //class = delete-link on delete button
  $(".delete-link").on("click", function(e){
    e.preventDefault();
    var teamUrl = $(this).attr("href");

    $.ajax({
      method: "DELETE",
      url: teamUrl,

    }).done(function(data){
      alert("Don\'t let the door hit you on the way out.");
      window.location = "/teams";
    });//end ajax function
  });//End delete link

});
