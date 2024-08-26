let button= document.getElementById("btn")


// what would happen if it was clicked, or anything
button.addEventListener("click", ()=> {
    // alert("I was clicked!")
    document.querySelector(".box").innerHTML = "<p>I was clicked</p>"
})

// what would happen if it was double clicked, or anything
button.addEventListener("dblclick", ()=> {
    // alert("I was clicked!")
    document.querySelector(".box").innerHTML = "<b>I was clicked</b>"
})

// what would happen if we right click
button.addEventListener("contextmenu", ()=> {
    alert("Please donate")
})

// what would happen if we press a key
document.addEventListener("keydown", (e)=> {
    // to see which key we clicked and the keycode of it
    console.log(e.key, e.keyCode)
})

// we can do these with keyboard keys, mouse click, etc



