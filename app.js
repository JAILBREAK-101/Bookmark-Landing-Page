// THE NAVIGATION BAR.
const navigation = document.querySelector(".nav");
const navBar = document.querySelector(".nav-menu-bar");
const closeNavBar = document.querySelector(".nav-menu-close");

let handleOpenNavBar = () => {
  navigation.classList.add("open-nav");
  console.log("OPEN NAV");
};

let handleCloseNavBar = () => {
  navigation.classList.remove("open-nav");
};

navBar.addEventListener("click", handleOpenNavBar);
closeNavBar.addEventListener("click", handleCloseNavBar);

// const toggle_menu = document.getElementsByClassName(".hamburger")[0];
// const navigation_links = document.getElementsByClassName()

// The Accordion.
const accordion_main = document.querySelector(".accordion-container");
const each_item = document.querySelectorAll(".accordion-items");
const text = document.querySelectorAll(".display2");
const exact_dropdown = document.querySelectorAll(".second");
const first_display = document.getElementsByClassName("display1");
let closing_dropdown = document.createElement("span");
closing_dropdown.classList.add("closing-dropdown");

function open(text, exact_dropdown, exact_item, index) {
  // for(let dropdowns of exact_dropdown) {
  exact_dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    // alert("ACTIVE!!!");
    exact_dropdown.style.display = "none";
    // Hide and show text.
    text.style.display = "block";
    // for (let texts of text) {
    // }

    // Since the dropdown has been hidden, a pull up should be displayed.
    let pick_up_wrapper = document.createElement("span");
    pick_up_wrapper.classList.add("second", "pick-up");

    // The real pickup element.
    let pick_up_image = document.createElement("img");
    pick_up_image.src = "./images/icon-arrow-up.svg";
    pick_up_image.classList.add("pick-up-img");

    pick_up_wrapper.append(pick_up_image);

    exact_item[index].append(pick_up_wrapper);

    // AFTER APPENDING, WE CAN NOW CLICK ON OUR PICKUP BUTTON, TO CLOSE OUR ACCORDION.
    function pickUp(exact_pickup) {
      exact_pickup.addEventListener("click", () => {
        text.style.display = "none";
        exact_dropdown.style.display = "block";

        // The PickUp should go.
        exact_pickup.style.display = "none";
      });
    }
    pickUp(pick_up_wrapper);
  });
}

open(text[0], exact_dropdown[0], each_item, 0);
open(text[1], exact_dropdown[1], each_item, 1);
open(text[2], exact_dropdown[2], each_item, 2);
open(text[3], exact_dropdown[3], each_item, 3);

// FOR FORM VALIDATION.
const form = document.getElementById("form");
const inputField = document.querySelector("input");

const submit_button = document.querySelector("form .btn1");
let errorMessage = document.querySelectorAll(".error");

// TO HIDE OUR ERROR MESSAGE.
for (var allErrorMsg of errorMessage) {
  allErrorMsg.classList.add("hidden");
  document.querySelector(".error-icon").classList.add("hidden");
}

inputField.oninvalid = function (e) {
  allErrorMsg.classList.remove("hidden");
  document.querySelector(".error-icon").classList.remove("hidden");
  inputField.style.border = "1px solid var(--secondary-color)";
};
