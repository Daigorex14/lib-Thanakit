const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const auth = require('../middleware/auth');

router.post("/addStaff",staffController.addStaff);
router.post("/login", staffController.login);
router.get("",staffController.getStaffs);
router.get("/name/:name",staffController.getStaffByName);

router.put("/:id",auth, staffController.updateStaff);
router.delete("/:id",staffController.deleteStaff);

module.exports = router;