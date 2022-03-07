const router = require("express").Router();
const { newNote } = require("../../lib/notes");
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  console.log("here are the notes", notes);
  res.json(notes);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  /// adds id to the new note
  const note = newNote(req.body, notes);
  res.json(note);
});

module.exports = router;
