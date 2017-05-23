(function(exports){
  function testNotesArrayStartsEmpty(){
    var notes = new Notes();

    if (notes.list.length != 0) {
      throw new Error("Object is an not an empty array");
    }
  };

  testNotesArrayStartsEmpty();
})(this);
