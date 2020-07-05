const router = require("express").Router();
const moderatorService = require("../services/moderatorService");
// import the check helpers.
const checks = require("../utilities/controllerChecks");

router.post("/getmoderator", function (req, res) {
  const data = req.body.text;
  // checks to make sure the data coming into the controller is properly formatted
  if (checks.checkDataFormat(data) && checks.checkIfNotEmpty(data)) {
    moderatorService.screenText(data, res);
  } else res.send(checks.errorList);
});

module.exports = router;
