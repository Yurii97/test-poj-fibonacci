const express = require("express");
const { ctrlWrapper } = require("../middlewares");
const { addTicket, getTicket } = require("../controllers");

const router = express.Router();

router.post("/", ctrlWrapper(addTicket));
router.get("/", ctrlWrapper(getTicket));

module.exports = router;
