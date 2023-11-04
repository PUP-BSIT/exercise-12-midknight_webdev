function onTextChange() {
    let userName = document.getElementById("name");
    let userComment = document.getElementById("comment");
    if (userName.value.length > 0 && userComment.value.length > 0){ 
            document.getElementById("submit").disabled = false;
    } 
    else {
    document.getElementById("submit").disabled = true;
    }}