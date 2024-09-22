const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");
let selectedValue;

let cardId = 0;

// funkcja otwierająca panel "+ Dodaj"
const openPanel = () => {
	notePanel.style.display = "flex";
};

// funkcja zamykająca panel "Anuluj"
const closePanel = () => {
	notePanel.style.display = "none";
	error.style.visibility = "hidden";
	textarea.value = "";
	category.selectedIndex = 0;
};

// funkcja dodająca notatkę "Zapisz"
const addNote = () => {
	if (
		textarea.value !== "" &&
		category.options[category.selectedIndex].value !== "0"
	) {
		createNote();
		error.style.visibility = "hidden";
	} else {
		error.style.visibility = "visible";
	}
};

// funkcja tworząca notatkę
const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", cardId);

	newNote.innerHTML = `
    <div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick="deleteNote(${cardId})">
    <i class="fa-solid fa-xmark icon"></i>
    </button>
    </div>
    <div class="note-body">${textarea.value}</div>
    `;
	noteArea.appendChild(newNote);
	cardId++;
	closePanel();
	checkColor(newNote);
};

// funkcja przechwytująca wybraną kategorię notatki (Tytuł)
const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

// funkcja dodająca kolor tła do notatki
const checkColor = note => {
	switch (selectedValue) {
		case "Zakupy":
			note.style.backgroundColor = "rgb(72,255,0)";
			break;
		case "Praca":
			note.style.backgroundColor = "rgb(255,243,0)";
			break;
		case "Inne":
			note.style.backgroundColor = "rgb(0,170,255)";
			break;
	}
};

// funkcja usuwająca konkretną notatkę "X"
const deleteNote = id => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

// funkcja usuwająca wszystkie notatki "Usuń wszystkie"
const deleteAllNotes = () => {
	noteArea.textContent = "";
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
