function testNotesContent() {
  document.getElementById('note').click();
  if (document.documentElement.textContent.indexOf("My name is Filipe") == -1) {
      document.write("Name is not Filipe");
    } else {
      document.write("Pass")
    }
  };

  testNotesContent();
