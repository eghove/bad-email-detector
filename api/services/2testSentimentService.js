const key = require("../../keys");

// some test data
const documents = {
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
};

("use strict");

let https = require("https");

const subscription_key = key.textAnalyticsKey.toString();
const endpoint = key.textAnalyticsEndpoint.toString();

let path = "/text/analytics/v2.1/sentiment";

let response_handler = function (response) {
  let body = "";
  response.on("data", function (d) {
    body += d;
  });
  response.on("end", function () {
    let body_ = JSON.parse(body);
    let body__ = JSON.stringify(body_, null, "  ");
    console.log(body__);
  });
  response.on("error", function (e) {
    console.log("Error: " + e.message);
  });
};

let get_sentiments = function (documents) {
  let body = JSON.stringify(documents);

  let request_params = {
    method: "POST",
    hostname: new URL(endpoint).hostname,
    path: path,
    headers: {
      "Ocp-Apim-Subscription-Key": subscription_key,
    },
  };

  let req = https.request(request_params, response_handler);
  req.write(body);
  req.end();
};

module.exports = {
  getSentiments: function () {
    get_sentiments(documents);
  },
};
