const selected = document.querySelector(".select__selected");
const optionsContainer = document.querySelector(".select__options");
const optionsList = document.querySelectorAll(".select__option");

selected.innerHTML = document.querySelector(".select__label--default-value").innerHTML;

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("select__active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("select__active");
  });
});