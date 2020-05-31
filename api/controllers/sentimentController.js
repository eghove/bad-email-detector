const router = require("express").Router();
const testSentimentService = require("../services/2testSentimentService");
const sentimentService = require("../services/sentimentService");

router.route("/testsentiment").get(testSentimentService.getSentiments);

router.route("/testagain").get(sentimentService.getDocumentSentiment);

module.exports = router;
