const colors = ["purple", "pink", "lavender", "aquamarine", "aqua", "darkviolet", "deeppink"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}