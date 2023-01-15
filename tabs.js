// FOR THE TABS AND THEIR SWITCHING.
let tab_links = document.querySelector(".selection");
let array_tab = Array.from(tab_links.children);
let tabs = Array.from(document.querySelector(".tabs").children);

// for (let each_tab of tabs) {
//     each_tab.classList.add('hidden')
// }

// let get_tab_index = () => {
//   return tab_links.addEventListener("click", (e) => {
//     e.preventDefault();
//     var target = e.target.closest("li");
//     if (!target) {
//       return;
//     }
//     console.log(array_tab.indexOf(target));
//   });
// };

// get_tab_index(); 

function display_tabs(tab_index) {
  tabs.forEach((tab) => {
    tab.style.display = 'none'
  });
  tabs[tab_index].style.display = 'flex'
}

display_tabs(0)
