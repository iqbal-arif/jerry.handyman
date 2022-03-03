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
      "Install & Replace of Electrical Units ",
      "Indoor, Outdoor Power Outlets",
      "Surge Protected Outlets",
      "Light FIxtures",
      "Ceiling Fan",
      "Wall Mounted Fans",
    ],
  },
  {
    rightRoof: [
      "Install & Replace of Exhaust Fans",
      "Stove Overhead exhaust",
      "Ceiling Mounted exhaust",
      "Bathroom exhaust",
      "Inline exhaust",
    ],
  },
  {
    topLeftBox: [
      "Install & Replace of Security instruments",
      "Motion Sensor Lights",
      "Emergency Light",
      "Ring Doorbell Locks",
      "Doorbell Cameras",
    ],
  },
  {
    topRightBox: [
      "Mounting & Hanging",
      "Mirrors",
      "Pictures",
      "Wall TVs",
      "Ceiling Fans",
      "Drapes, Curtains, & Blinds",
    ],
  },
  {
    bottomLeftBox: [
      "Repair & Replace",
      "All types of Fans",
      "Update Outlets & Switches",
      "Update Lighting (dining, bedroom, hallway, kitchen, bath, foyer, & more)",
      "Outdoor Light Fixtures",
      "Add Extra Outlet",
    ],
  },
  {
    bottomRightBox: [
      "Install & Replace",
      "Microwaves",
      "Above Stove Microwaves",
      "Repair & Replace Wall Mounted Kitchen Exhaust Fans",
      "Repair & Replace Bathroom Exhaust Fans",
      "Sinks",
      "Update Kitchen & Bathroom Faucets",
      "Re-caulk Baths and Showers",
      "Shower Curtain Rods",
      "Bathroom Vanity Light Fixtures",
      "Stove Hood Vents",
    ],
  },
  {
    leftFloor: [
      "Install & Replace of Doorbell Cameras",
      "Wireless",
      "Hardwired System",
    ],
  },
  {
    rightFloor: [
      "Other Repairs",
      "Gas Stoves",
      "Fencing",
      "Garage Doors",
      "Lamps & more...",
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
    // While loop run on the object every time when HTML element is clicked
    for (key in modalDataList[k]) {
      // First For loop gets the key from the object and matches with target id
      if (key === eValue) {
        // when key & eValue matches the Second For loop runs and grabs the target  array
        for (const [key, value] of Object.entries(modalDataList[k])) {
          arrayValue = value;
          // The Title of the Target is hardcoded
          modalTitle.textContent = arrayValue[0];
          // Third For Loop runs for eac element in the array and displays it in the modal
          for (a = 1; a < arrayValue.length; ++a) {
            let arrayValueList = arrayValue[a];
            // Creating
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
