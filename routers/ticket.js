const express = require("express");
const { ctrlWrapper } = require("../middlewares");
const { addTicket, getTicket } = require("../controllers");

const router = express.Router();

router.post("/input", ctrlWrapper(addTicket));
router.get("/output", ctrlWrapper(getTicket));

module.exports = router;
