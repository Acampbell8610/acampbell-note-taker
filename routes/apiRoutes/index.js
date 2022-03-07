
const router = require('express').Router();

const notesRoutes = require('../apiRoutes/notesRouts');


router.use(notesRoutes);


module.exports = router;