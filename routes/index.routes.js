const { Router } = require("express");
const { submitWaitlist, getAllWaitlists } = require("../controllers/waitlist.controller");

const router = Router();

router.post("/waitlist", submitWaitlist);
router.get("/waitlist", getAllWaitlists);

module.exports = router;
