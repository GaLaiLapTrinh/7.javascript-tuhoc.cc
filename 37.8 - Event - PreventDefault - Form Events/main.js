//37.8 PreventDefault - Form Events
const form = document.querySelector("#login");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form đã được submit");
});
