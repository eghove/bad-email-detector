import axios from "axios";

export default {
  test: function () {
    return axios.post("/api/sentiment/getsentiment", { text: "garbage" });
  },
  getSentimentScore: function (userText: string) {
    return axios.post("/api/sentiment/getsentiment", { text: userText });
  },
  getModeratorScores: function (userText: string) {
    return axios.post("/api/moderator/getmoderator", { text: userText });
  },
};
