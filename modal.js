// Variable Selection

const modalOverlay = document.querySelector("#modal-overlay");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#cls-btn");
const svgElement = document.querySelectorAll(".svg-element");

//  Modal Content Title and List

const modalTitle = document.querySelector("#modal-title");
// modalTitle.textContent = modalData[0][0];

const modalList = document.querySelector("#modal-list");

//  Modal Data

const modalDataList = [
  {
    leftRoof: [
      "Installation or Replacement of Electrical Units ",
      "Indoor , Outdoor Power outlets",
      "GFCI outlets",
      "Light FIxtures",
      "Cieling Fan",
      "Wall Mount Fans",
    ],
  },
  {
    rightRoof: [
      "Installation or Replacement of Exhaust Fans",
      "Stove Overhead exhaust",
      "Ceiling Mounted exhaust",
      "Bathroom exhaust",
      "Inline exhaust",
    ],
  },
  {
    topLeftBox: [
      "Installation or Replacement of Security instruments",
      "Motion Sensor Light",
      "Emergency Light",
      "Security Cam Door Lock",
      "Front door Security Cam",
    ],
  },
  {
    topRightBox: [
      "Mounting & Installation",
      "Mirror",
      "Picture",
      "Wall TV",
      "Wall-Fan",
      "Electrical Fixture",
      "Decorative Fixture",
    ],
  },
  {
    bottomLeftBox: [
      "All kinds of Repairment or Replacement",
      "All types of Fans",
      "Outlets Socket & Fittings",
      "All types of Lights",
      "Electrical Wiring",
      "Water Pipe fittings",
      "Wall or Floor Sealing  & Caulking",
      "Gas Pipe fittings",
      "Door Bells & Door Locks",
    ],
  },
  {
    bottomRightBox: [
      "Installation or Replacement of Kitchen & Bathroom units",
      "Microwave",
      "Sink",
      "Shower Curtain Rod",
      "Bathroom Vanity Light Fixture",
      "Stove Hood Vent",
    ],
  },
  {
    leftFloor: [
      "Installation or Replacement of Doorbell Cameras",
      "Wireless",
      "Hardwired System",
    ],
  },
  {
    rightFloor: [
      "Installation or Replacement of Smart Locks",
      "Smart WiFi Deadbolt",
      "Keypad Deadbolt",
    ],
  },
];

// console.log(modalDataList.length);
console.log(modalDataList[0]);
console.log(modalDataList[0].leftRoof[2]); //First line of the modalDataList Array of Objects

// Modal Function
function modalContent(eValue) {
  let k = 0;
  while (k < modalDataList.length) {
    for (key in modalDataList[k]) {
      if (key === eValue) {
        for (const [key, value] of Object.entries(modalDataList[k])) {
          // console.log(key);
          // console.log(value);
          arrayValue = value;
          // console.log("value: ", value);
          modalTitle.textContent = arrayValue[0];
          for (a = 1; a < arrayValue.length; ++a) {
            let arrayValueList = arrayValue[a];

            arrayValueList = document.createElement("li");
            let modalListItem = modalList.appendChild(arrayValueList);
            modalListItem.textContent = arrayValue[a];
          }
        }
      }
      k++;
    }
  }
}

// Creat an Element
// const modalListItem1 = document.createElement("li");
// const modalListItem2 = document.createElement("li");
// const modalListItem3 = document.createElement("li");

// Appending List Item
// modalList.appendChild(modalListItem1);
// modalList.appendChild(modalListItem2);
// modalList.appendChild(modalListItem3);
// modalListItem1.textContent = modalData[0][1];
// modalListItem2.textContent = modalData[0][2];
// modalListItem3.textContent = modalData[0][3];

// Open Modal
svgElement.forEach(function (svgElement) {
  svgElement.addEventListener("click", function (e) {
    eventValue = e.target.id;

    modal.classList.add("open", modalContent(eventValue));
    // modal.classList.add("open");
  });
});

// Close Modal Function
closeBtn.addEventListener("click", function () {
  modalList.innerHTML = "";
  modalOverlay.classList.remove("open");
  modal.classList.remove("open");
});
