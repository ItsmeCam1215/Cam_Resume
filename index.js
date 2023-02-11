function colorChange(e) {
    if ( e.target.style.color == "red") {
    e.target.style.color = "blue"
    e.target.innerHTML = "Hello World!"
    } else {
        e.target.style.color = "red"
        e.target.innerHTML = "Here is my resume"
    }
}