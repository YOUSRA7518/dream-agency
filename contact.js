let switcher = 0;
let sticky = document.querySelector(".sticky");

if (localStorage.getItem("changebg") != undefined) {
  switcher = localStorage.getItem("changebg");
}

let change = document.querySelector("#togglebutton");
document
  .getElementById("change-theme-btn")
  .addEventListener("click", function() {
    if (switcher == 0) {
      switcher = 1;
      localStorage.setItem("changebg", switcher);
      changeStyle();
    } else if (switcher == 1) {
      switcher = 0;
      localStorage.clear();
      changeStyle();
    }
  });

function changeStyle() {
  document.querySelector("#togglebutton").style.backgroundColor = "inherit";
  if (switcher == 1) {
    change.style.backgroundColor = "#DCDCDC";
    change.style.color = "white";
  } else {
    change.style.backgroundColor = "#F0F8FF";
    change.style.color = "grey";
  }
}
changeStyle();
