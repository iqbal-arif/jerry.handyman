const leftRoof = document.querySelector(".l-roof");
const modalOverlay = document.querySelector("#modal-overlay");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#cls-btn");
const bodyContainer = document.querySelector("body#container");
const houseBox = document.querySelector("#house");

leftRoof.addEventListener("click", function () {
  modalOverlay.classList.add("open");
  modal.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open");
  modal.classList.remove("open");
});
