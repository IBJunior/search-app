const express = require("express");
const { get_suggestion } = require("../controllers/searchController");
const router = express.Router();

router.get("/:query/", get_suggestion);

module.exports = router;
