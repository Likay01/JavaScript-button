function myFunction() {
    let text = document.getElementById("book").innerHTML;
    document.getElementById("book").innerHTML = text.replace("Waiting on Check in...","✔ You are checked in! " );
}
