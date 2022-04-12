const notes_array = [
  {
    title: "first note",
    noteBody: "this is an example note",
    id: 1,
  },
];
// Define varibales for the note app utilities, buttons, text area etc....

//const create_note_area = document.querySelector(".create-note-area");
const note_button = document.getElementById("create")
//const save_button = `<button class = "Save button"> Save</button>`;
//const cancel_note = `<button class = "Cancel button"> Cancel</button>`;
const text_area = `<textarea id ="New_note" name="note_area" rows="25" cols="50"
></textarea>`;
//const Side_menu = document.querySelector(".notes-list");

//note_button.addEventListener("click", () => {
  //create_note_area();
//});

function add_Note(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `<div class = "notes">
      <div class = "tools">
        <button class = "save"><i class="fas fa-save"></i>
        <button class = "delete"> <i class = "fas fa-trash"></i>
      </div>
        <div class = "main ${text ? "" : "hidden"}"></div>
        <textarea class = "${text ? "hidden" : ""}"></textarea>
      </div>
  `;

  const saved_notes_button = document.querySelector(".save");
  const delete_button = document.querySelector(".delete");

  const main = note.querySelector(".main")
  const textarea = note.querySelector("textarea")
  textarea.value = text;

  saved_notes_button.addEventListener("click", ()=>{
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  })

    delete_button.addEventListener("click", ()=>{
      note.remove();

      updateLocalStorage()
    });

    textarea.addEventListener("input", (e)=>{
      const { value } = e.target;
      main.innerHTML = marked(value);

    })

    document.body.appendChild(note);

}

// added function to update local storage when save or delete buttons are used

function updateLocalStorage(){
  const notesTxt = document.querySelectorAll("textarea");
  const notes = [];

  notesTxt.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}