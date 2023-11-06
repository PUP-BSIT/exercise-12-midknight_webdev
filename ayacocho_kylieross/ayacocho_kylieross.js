function leavecomment() {
    let nameInput = document.getElementById("name_comments");
    let comment = document.getElementById("comment_box");
    if(nameInput.value.length > 0 && comment.value.length > 0) {
        document.getElementById("submit_button").disabled = false;
    }

    else {
        document.getElementById("submit_button").disabled = true;
    }
}