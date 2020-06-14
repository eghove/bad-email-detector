const router = require("express").Router();
const moderatorService = require("../services/moderatorService");

router.get("/testmoderator", function (req, res) {
  moderatorService.screenText("what the crap is going around here", res);
});

module.exports = router;
