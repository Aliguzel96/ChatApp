const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Sunucu yuklendi ve calisiyor");
});

module.exports = router;