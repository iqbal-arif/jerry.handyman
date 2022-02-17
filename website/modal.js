const leftRoof = document.querySelector(".l-roof");
console.log("leftRoof: ", leftRoof);
const modalOverlay = document.querySelector("#modal-overlay");
console.log("modalOverlay: ", modalOverlay);
const modal = document.querySelector("#modal");
console.log("modal: ", modal);
const closeBtn = document.querySelector("#cls-btn");
console.log("closeBtn: ", closeBtn);
const bodyContainer = document.querySelector("body#container");
console.log("bodyContainer: ", bodyContainer);
const houseBox = document.querySelector("#house");
console.log("houseBox: ", houseBox);

leftRoof.addEventListener("click", function () {
  modalOverlay.classList.add("open");
  modal.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open");
  modal.classList.remove("open");
});
