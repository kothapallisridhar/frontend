const express = require("express");
const router = express.Router();
const leadController = require("../controllers/leadController");

router.get("/", leadController.getLeads);
router.get("/:id", leadController.getLeadById);
router.post("/", leadController.createLead);
router.put("/:id", leadController.updateLead);
router.delete("/:id", leadController.deleteLead);

module.exports = router;
