const express = require("express");
const router = express.Router();
const { generateQuestion } = require("../controllers/questionsController");

router.post("/generate", generateQuestion);

module.exports = router;
