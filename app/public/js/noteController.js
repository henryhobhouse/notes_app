'use strict';

document.getElementById('noteButton').addEventListener("click", function() {
  var string = document.getElementById('box').value
  note.addNote(string)
  Showlinks();
});

function Showlinks() {

  var noteSum = note.list.length

  var newLink = document.createElement("a");

  newLink.setAttribute("href", `#a${noteSum}all`);

  var displayNoteLink = document.getElementById('displayNoteLink');

  newLink.innerHTML = note.list[noteSum-1].substring(0,20) + '<br>';
  displayNoteLink.append(newLink);

  var newNote = document.createElement("p");

  newNote.setAttribute("id", `a${noteSum}all`);

  var displayNote = document.getElementById('displayNote');

  newNote.innerHTML = note.list[noteSum-1] + '<br>';
  displayNote.append(newNote);

};
