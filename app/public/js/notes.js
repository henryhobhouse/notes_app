linkToExpandNotes();
createNotes();

function linkToExpandNotes() {
  document.getElementById("expandNote");
  document.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
  document
    .getElementById("note")
    .innerHTML = "My name is Filipe and I am 28 years old.";
  });
};

function createNotes() {
  document.getElementById("box")
  document.write("My birthday is on the 18th");
  document.getElementById("submitButton");
  document.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
  })
  document.getElementById("myNewNoteLink");
  document.addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
    })
    document
    .getElementById("note")
    .innerHTML = "My birthday is on the 18th";
};
