function testNotesCanBeAdded() {
  document.getElementById('myNewNote').click();
  if (document.documentElement.textContent.indexOf("My birthday is on the 18th") == -1) {
    document.write("Note was not added")
  } else {
    document.write("IT HAS PASSED YAY")
  }
};

function testNotesContent() {
  document.getElementById('note').click();
  console.log(document.documentElement.textContent)
  if (document.documentElement.textContent.indexOf("My name is Filipe") == -1) {
      document.write("Name is not Filipe")
    } else {
      document.write("Pass")
    }
  };

testNotesContent();
testNotesCanBeAdded();
