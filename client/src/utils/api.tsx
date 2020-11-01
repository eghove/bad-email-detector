import axios from "axios";

export default {
  // this is a test function for get sentiment score
  testGetSentimentScore: function () {
    return axios.post("/api/sentiment/getsentiment", { text: "garbage" });
  },
  getSentimentScore: function (userText: string) {
    return axios.post("/api/sentiment/getsentiment", { text: userText });
  },
  // this is a test function for get moderator score
  testGetModeratorScore: function () {
    return axios.post("/api/moderator/getmoderator", {
      text: "does this damn thing work?",
    });
  },
  getModeratorScores: function (userText: string) {
    return axios.post("/api/moderator/getmoderator", { text: userText });
  },
};
