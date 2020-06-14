console.log("keys.js is loaded!");

module.exports = {
  // pulls in the Azure Text Analytics Key for the cognitive service
  textAnalyticsKey: process.env.TEXT_ANALYTICS_KEY,
  textAnalyticsEndpoint: process.env.TEXT_ANALYTICS_ENDPOINT,
  // pulls in the Azure Moderator key for the congnitive service
  modScreenKey: process.env.MOD_SCREEN_KEY,
  modScreenEndpoint: process.env.MOD_SCREEN_ENDPOINT,
};
