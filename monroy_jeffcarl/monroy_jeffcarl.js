//commentbutton
function commentButton() {
    let userInput = document.getElementById("user_input");
    let userComment = document.getElementById("comment_input");
    if(userInput.value.length > 0 && userComment.value.length > 0) {
      document.getElementById("comment_button").disabled = false;
    } else {
      document.getElementById("comment_button").disabled = true;
    }
}