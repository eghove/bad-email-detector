const router = require("express").Router();
const sentimentService = require("../services/sentimentService");

router.post("/getsentiment", function (req, res) {
  const data = req.body;
  sentimentService.getDocumentSentiment(data, res);
});

module.exports = router;
