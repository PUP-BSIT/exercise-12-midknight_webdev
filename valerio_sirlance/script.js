function commentButton() {
    let userName = document.getElementById("user_name");
    let userComment = document.getElementById("user_comment");
    let commentButton = document.getElementById("comment_button");

    if(userName.value.length > 0 && userComment.value.length > 0) {
        document.getElementById("comment_button").disabled = false;
    }

    else {
        document.getElementById("comment_button").disabled = true;
    }
    commentButton.addEventListener("click", function() {
        alert("Comment sent successfully!");
    });
}