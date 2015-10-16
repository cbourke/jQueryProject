

function reveal() {
  //TODO
}

$(document).ready( function() {
  //TODO
});


function toggleAllComments() {
  var text = $("#allToggle").text();
  var buttons;
  if(text === "Collapse All") {
    text = "Expand All";
    buttons = "[+]";
    $("div[id^='commentBody']").slideUp();
  } else {
    text = "Collapse All";
    buttons = "[-]";
    $("div[id^='commentBody']").slideDown();
  }
  $("#allToggle").text(text);
  $("span[id^='commentToggle']").text(buttons);


}

function commentToggle(commentNumber) {
  //TODO
}
