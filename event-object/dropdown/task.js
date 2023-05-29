const dropdownList = document.querySelector(".dropdown__list");
const dropdownButton = document.querySelector(".dropdown__value");
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownButton.addEventListener("click", () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

function closeDropdown() {
    dropdownList.classList.remove('dropdown__list_active');
}

function updateValue(event) {
    event.preventDefault();
    const selectedValue = event.target.textContent;
    dropdownButton.textContent = selectedValue;
    closeDropdown();
}

dropdownItems.forEach((item) => {
    item.addEventListener('click', updateValue);
}); 

