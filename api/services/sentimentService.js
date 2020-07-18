const key = require("../../keys");
const axios = require("axios");

const subscription_key = key.textAnalyticsKey.toString();
const endpoint = key.textAnalyticsEndpoint.toString();

module.exports = {
  getDocumentSentiment: function (req, res) {
    axios({
      method: "post",
      headers: { "Ocp-Apim-Subscription-Key": subscription_key },
      url: endpoint + "text/analytics/v2.1/sentiment",
      data: req,
    })
      .then(function (response) {
        // strip out some parts of the response
        if (response.data.documents[0].id) {
          delete response.data.documents[0].id;
        }
        res.json(response.data);
      })
      .catch((err) => {
        // sanitizing the response to pull out API information
        if (err["config"]) {
          delete err["config"];
        }
        res.status(422).json(err);
      });
  },
};
