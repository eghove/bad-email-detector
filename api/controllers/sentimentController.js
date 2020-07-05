const router = require("express").Router();
const sentimentService = require("../services/sentimentService");
// import the checks and transformers helpers.
const checks = require("../utilities/controllerChecks");
const transformers = require("../utilities/controllerTransformers");

router.post("/getsentiment", function (req, res) {
  const data = req.body.text;
  // checks to make sure the data coming into the controller is properly formatted
  if (checks.checkDataFormat(data) && checks.checkIfNotEmpty(data)) {
    transformers.transformData(data);
    sentimentService.getDocumentSentiment(transformers.changedData, res);
  } else res.send(checks.errorList);
});

module.exports = router;
