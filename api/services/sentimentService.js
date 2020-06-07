const key = require("../../keys");
const axios = require("axios");
const testData = require("../data/testData");

const subscription_key = key.textAnalyticsKey.toString();
const endpoint = key.textAnalyticsEndpoint.toString();
// TODO - HELPER FUNCTIONS

module.exports = {
  getDocumentSentiment: function (req, res) {
    axios({
      method: "post",
      headers: { "Ocp-Apim-Subscription-Key": subscription_key },
      url: endpoint + "text/analytics/v2.1/sentiment",
      data: testData,
    })
      .then(function (response) {
        res.json(response.data);
      })
      .catch((err) => res.status(422).json(err));
  },
};
