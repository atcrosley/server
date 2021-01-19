let express = require("express");
let router = express.Router();

router.get("/about", function (req, res) {
  res.send("This is the about route!");
});

module.exports = router;
