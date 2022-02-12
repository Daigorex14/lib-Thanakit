const express = require('express');
const router = express.Router();
const borrowController = require("../controllers/borrowController");

router.get("/member/:id", borrowController.getBorrowDataByMember);
router.get("/book/:id", borrowController.getBorrowDataByBook);

router.get("/", borrowController.getBorrows);

router.post("/", borrowController.borrowBook);

router.patch("/return/:id", borrowController.returnBook);

module.exports = router;