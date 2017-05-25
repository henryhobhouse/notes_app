'use strict';

var note = new Notes();

function Notes() {
  console.log("Array Running")
  this.list = [];
};

Notes.prototype.addNote = function(string){
  string = document.getElementById('box').value
  this.list.push(string)
  for (var i = 0; i < this.list.length; i++) {
    var newLink = document.createElement("a")
    newLink.setAttribute("id", `a${i}`);
    newLink.setAttribute("href", "");
    var displayNoteLink = document.getElementById('displayNoteLink')
    displayNoteLink.append(newLink)

    // if (this.list[i].length < 20) {
      document.getElementById(`a${i}`).innerHTML = this.list[i].substring(0,20) + '<br>'
    // }
  }
}
