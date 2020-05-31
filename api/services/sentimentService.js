const key = require("../../keys");
const axios = require("axios");

const subscription_key = key.textAnalyticsKey.toString();
const endpoint = key.textAnalyticsEndpoint.toString();
// TODO - HELPER FUNCTIONS

module.exports = {
  getDocumentSentiment: function (req, res) {
    axios({
      method: "post",
      headers: { "Ocp-Apim-Subscription-Key": subscription_key },
      url: endpoint + "text/analytics/v2.1/sentiment",
      data: {
        documents: [
          {
            id: "1",
            language: "en",
            text: "My wife is amazing and I love her!",
          },
          {
            id: "2",
            language: "es",
            text:
              "Este ha sido un dia terrible, llegué tarde al trabajo debido a un accidente automobilistico.",
          },
        ],
      },
    })
      .then(function (response) {
        res.json(response.data);
      })
      .catch((err) => res.status(422).json(err));
  },
};
