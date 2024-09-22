const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteBtns = document.getElementsByClassName("delete-note");
const deleteAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");
let selectedValue;

let cardId = 0;

const openPanel = () => {
	notePanel.style.display = "flex";
};

const closePanel = () => {
	notePanel.style.display = "none";
	error.style.visibility = "hidden";
	textarea.value = "";
	category.selectedIndex = 0;
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
