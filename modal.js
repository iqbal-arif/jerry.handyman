// Variable Selection

const modalOverlay = document.querySelector("#modal-overlay");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#cls-btn");
const leftRoof = document.querySelector(".l-roof");
const rightRoof = document.querySelector(".r-roof");
const topLeftBox = document.querySelector(".tl-box");
const topRightBox = document.querySelector(".tr-box");
const bottomLeftBox = document.querySelector(".bl-box");
const bottomRightBox = document.querySelector(".br-box");
const rightFloor = document.querySelector("r-floor");
const leftFloor = document.querySelector("l-floor");

// Event Listener
rightRoof = document.addEventListener("click", modalOpen);

//  Modal ON Function

leftRoof.addEventListener("click", function () {
  modalOverlay.classList.add("open");
  modal.classList.add("open");
});

//  Modal OFF Function

function modalOpen(svgBox) {
  console.log(`${svgBox} is being clicked`);
}

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open");
  modal.classList.remove("open");
});
