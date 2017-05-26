'use strict';

var note = new Notes();

function Notes() {
  this.list = [];
};

Notes.prototype.addNote = function(string){
  this.list.push(string)
};
