'use strict';

document.getElementById('noteButton').addEventListener("click", function() {
  var string = document.getElementById('box').value
  note.addNote(string)
  showLink();
  showNote();
});

function showLink() {
  var newLink = document.createElement("a");
  newLink.setAttribute("id", `a${note.list.length}`);
  newLink.setAttribute("href", `#a${note.list.length}all`);
  var displayNoteLink = document.getElementById('displayNoteLink');
  displayNoteLink.append(newLink);
  document.getElementById(`a${note.list.length}`).innerHTML = note.list[note.list.length-1].substring(0,20) + '<br>';
};

function showNote() {
  var newNote = document.createElement("p");
  newNote.setAttribute("id", `a${note.list.length}all`);
  var displayNote = document.getElementById('displayNote');
  displayNote.append(newNote);
  document.getElementById(`a${note.list.length}all`).innerHTML = note.list[note.list.length-1] + '<br>';
};
