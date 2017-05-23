linkToExpandNotes();

function linkToExpandNotes() {
  document.getElementById("expandNote");
  document.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
  document
    .getElementById("note")
    .innerHTML = "My name is Filipe";
  });
};
