const circle = document.querySelector(".circle")

function change_color() {
    if (circle.style.backgroundColor == "blue")
        circle.style.backgroundColor = "blueviolet"
    else
        circle.style.backgroundColor = "blue"
}