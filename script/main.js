const play = document.querySelector(".play");
const joe = document.querySelector(".joe");
const abby = document.querySelector(".abby");

play.addEventListener("click", function () {
  joe.classList.remove("hidden");
  abby.classList.remove("hidden");
});

play.addEventListener("click", function () {
  play.innerHTML = "Choose Your Character.";
});
