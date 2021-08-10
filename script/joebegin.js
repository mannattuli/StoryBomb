const abby1 = document.querySelector(".abby1");
const abby2 = document.querySelector(".abby2");

const storyabby1 = document.querySelector(".storyabby1");
const storyabby2 = document.querySelector(".storyabby2");

abby1.addEventListener("click", function () {
  storyabby1.classList.remove("hidden");
  abby2.classList.add("hidden");
});

abby2.addEventListener("click", function () {
  storyabby2.classList.remove("hidden");
  abby1.classList.add("hidden");
});

//Second Option part a (1a 1b)//

const abby1a = document.querySelector(".abby1a");
const abby1b = document.querySelector(".abby1b");

const storyabby1a2 = document.querySelector(".storyabby1a2");
const storyabby1b2 = document.querySelector(".storyabby1b2");

abby1a.addEventListener("click", function () {
  storyabby1a2.classList.remove("hidden");
  abby1b.classList.add("hidden");
});

abby1b.addEventListener("click", function () {
  storyabby1b2.classList.remove("hidden");
  abby1a.classList.add("hidden");
});

//Second Option part b (2a 2b)//

const abby2a = document.querySelector(".abby2a");
const abby2b = document.querySelector(".abby2b");

const storyabby2a2 = document.querySelector(".storyabby2a2");
const storyabby2b2 = document.querySelector(".storyabby2b2");

abby2a.addEventListener("click", function () {
  storyabby2a2.classList.remove("hidden");
  abby2b.classList.add("hidden");
});

abby2b.addEventListener("click", function () {
  storyabby2b2.classList.remove("hidden");
  abby2a.classList.add("hidden");
});
