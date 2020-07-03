const router = require("express").Router();
const moderatorService = require("../services/moderatorService");

router.post("/getmoderator", function (req, res) {
  const data = req.body.text;
  moderatorService.screenText(data, res);
});

module.exports = router;
