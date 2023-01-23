// document.getElementById("hider").onclick = function () {
//   document.getElementById("text").hidden = true;
// };

button = document.querySelector("#hider");

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1")); // doesn't work

button.onclick = () => alert(2);
