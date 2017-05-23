function testNotesContent() {
  // document
  // .getElementById('note')
  // .addEventListener("click", function(clickEvent) {
  //   clickEvent.preventDefault();
  // })

  var a = document.getElementById('note').click();
  console.log(a)
  //.addEventListener("click", function(clickEvent) {});
  //console.log(a.click())

    if (a !== "My name is Filipe") {
      document.write("Name is not Filipe");
    } else {
      document.write("Pass")
    }
  };

  testNotesContent();
