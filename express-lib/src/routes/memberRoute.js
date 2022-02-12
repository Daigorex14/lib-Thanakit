const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const auth = require('../middleware/auth');

router.post("/addMember",memberController.addMember);
router.get("",memberController.getMembers);
router.get("/name/:name",memberController.getMemberByName);
router.put("/:id", memberController.editWholeMember);
router.delete("/:id",memberController.deleteMember);

module.exports = router;