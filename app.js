const colours = [
  "green",
  "red",
  "rgba(92,133,6)",
  "#f415f6",
  "darkblue",
  "cyan",
  "yellow",
];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function () {
  // get random number
  const randomNumber = getRandomNum();
  console.log(randomNumber);
  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
});

function getRandomNum() {
  return Math.floor(Math.random() * colours.length);
}
