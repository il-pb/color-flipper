const hex = [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}