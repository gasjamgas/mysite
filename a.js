const button = document.querySelector(".b button")
const h = document.querySelector(".h h4")
let bb = true

function bu(){
    bb = !bb
    if (bb == true){
        h.style.color = "black"
    } else {
        h.style.color = "white"
    }
}

button.addEventListener("click", bu)