'use strict';

var note = new Notes();

function Notes() {
  console.log("Array Running")
  this.list = [];
};

Notes.prototype.addNote = function(string){
  string = document.getElementById('box').value
  this.list.push(string)
    var newLink = document.createElement("a")
    newLink.setAttribute("id", `a${this.list.length}`);
    console.log(this.list.length);
    console.log(this.list[this.list.length]);
    newLink.setAttribute("href", `#a${this.list.length}all`);
    var displayNoteLink = document.getElementById('displayNoteLink')
    displayNoteLink.append(newLink)
    document.getElementById(`a${this.list.length}`).innerHTML = this.list[this.list.length-1].substring(0,20) + '<br>'

    var newNote = document.createElement("p")
    newNote.setAttribute("id", `a${this.list.length}all`);
    var displayNote = document.getElementById('displayNote')
    displayNote.append(newNote)
    document.getElementById(`a${this.list.length}all`).innerHTML = this.list[this.list.length-1] + '<br>'
}

Notes.prototype.addLink = function() {
  
}
