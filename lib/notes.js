const fs = require("fs");
const path = require("path");

// This creates the notes
function newNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}



function readFile() {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

module.exports = { newNote, readFile };
