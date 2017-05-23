'use strict';

function Notes() {
  this.list = [];
};

Notes.prototype.addNote = function(string){
  this.list.push(string)
}


//
//   function addNote(string){
//     this.list.push(string);
//   };
// exports.Notes = Notes;
// exports.addNote = addNote;
// })(this);
