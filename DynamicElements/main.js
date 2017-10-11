
$(document).ready( function() {

  //TODO
  //Place your page load animations here:

  //Teaser Preview
  //1. Use jQuery to get the HTML contents of the article and store it in a variable
  //2. Use jQuery to get the text of the lead paragraph and store it in a variable
  //3. Use strsub to get the first 50 characters of the lead paragraph text
  //4. Create a string that consists of the first 50 characters, an ellipsis,
  //   and an HTML formatted button with the proper onclick event
  //5. Use jQuery to replace the HTML of the article with the string you created

});

/**
 * This function restores and reveals the main article
 */
function reveal() {
  //TODO
  //Teaser Preview (continued)
  //6. Restore the article contents to the original HTML
  //7. Animate the restored article to give a visual cue to the user
}

/**
 * This function collapses or expands all comments in the
 * comment section.
 */
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

/**
 *  This function collapses/expands a particular comment
 *  in the comment section with the given commentNumber
 */
function commentToggle(commentNumber) {

  //TODO: generalize this function so that it
  //      works with any of the comments identified
  //      by the commentNumber passed to this function
  var toggleText = $("#commentToggle1").text();
  if(toggleText === "[-]") {
    //they clicked [-] so collapse:
    $("#commentBody1").slideUp();
    //and reset the toggle text:
    $("#commentToggle1").text("[+]");
  }
  //TODO: handle the "show" case

}
