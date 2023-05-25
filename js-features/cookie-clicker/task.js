const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

image.onclick = function cookieClicker() {
    image.width = counter.textContent % 2 ? 200 : 250;
    counter.textContent++;
}

