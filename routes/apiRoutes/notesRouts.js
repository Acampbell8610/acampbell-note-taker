const router = require('express').Router();
 const { newNote } = require('../../lib/notes');
 const notes = require("../../db/db.json");

const uuid = require('../../helpers/helper')


router.get('/notes', (req, res) => {
  console.log('here are the notes', notes)
    res.json(notes);
  });

router.post('/notes', (req, res) => {
  req.body.id = uuid();

  /// adds id to the new note
  const note = newNote(req.body, notes);
  res.json(note)
})


  
module.exports = router;