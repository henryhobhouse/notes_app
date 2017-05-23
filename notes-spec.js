(function(exports){
  function testNotesArrayStartsEmpty(){
    var notes = new Notes();

    if (notes.list.length != 0) {
      throw new Error("Object is an not an empty array");
    }
  };

  function testNoteWasAddedToTheArray(){
    var notes = new Notes();
    var numberOfNotes = notes.list.length
    notes.addNote("Hello")

    if (notes.list.length === numberOfNotes) {
      throw new Error("Note was not added to the array");
    }
  };

  testNotesArrayStartsEmpty();
  testNoteWasAddedToTheArray();
})(this);
