const btnPrimary = document.getElementsByClassName("btn-primary");
for (const btn of btnPrimary) {
  btn.addEventListener("click", function () {
    alert("Please wait until the product release!");
  });
}
const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

const preloader = document.getElementById("loading");
window.addEventListener("load", dissapear);
function dissapear() {
  preloader.style.display = "none";
}
