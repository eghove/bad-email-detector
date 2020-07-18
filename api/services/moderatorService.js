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
        // strip out TrackingId
        if (response.data.TrackingId) {
          delete response.data.TrackingId;
        }
        // helper function to transform the category keys in the moderatorService response
        // followed by renaming of category keys
        const changeKey = (newKey, oldKey) => {
          response.data.Classification[newKey] =
            response.data.Classification[oldKey];
          delete response.data.Classification[oldKey];
        };

        if (response.data.Classification.Category1) {
          changeKey("ExplicitAdult", "Category1");
        }

        if (response.data.Classification.Category2) {
          changeKey("SuggestiveMature", "Category2");
        }

        if (response.data.Classification.Category3) {
          changeKey("ProfaneOffensive", "Category3");
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
