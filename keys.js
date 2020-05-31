console.log("keys.js is loaded!");

module.exports = {
  // pulls in the Azure Text Analytics Key for the cognitive service
  textAnalyticsKey: process.env.TEXT_ANALYTICS_KEY,
  textAnalyticsEndpoint: process.env.TEXT_ANALYTICS_ENDPOINT,
};
