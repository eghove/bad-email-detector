const key = require("../../keys");
const axios = require("axios");

const subscription_key = key.modScreenKey.toString();
const endpoint = key.modScreenEndpoint.toString();

module.exports = {
  screenText: function (req, res) {
    const screenPath = "contentmoderator/moderate/v1.0/ProcessText/Screen?";
    axios({
      method: "post",
      params: {
        // Request parameters
        autocorrect: "True",
        classify: "True",
      },
      headers: {
        "Ocp-Apim-Subscription-Key": subscription_key,
        "Content-Type": "text/plain",
      },
      url: endpoint + screenPath,
      data: req,
    })
      .then(function (response) {
        res.json(response.data);
      })
      .catch((err) => res.status(422).json(err));
  },
};
