const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const auth = require('../middleware/auth');

router.post("/addBook",bookController.addBook);
router.get("/",bookController.getBooks);
router.get("/name/:name",bookController.getBooks);
router.put("/:id", bookController.editWholeBook);
router.delete("/:id",bookController.deleteBook);

module.exports = router;