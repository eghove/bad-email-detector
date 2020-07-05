// the structure the sentimentService expects to see
const changedData = {
  documents: [
    {
      id: "1",
      language: "en",
      text: "String to evaluate",
    },
  ],
};

// pass the data that makes it through the checks and insert into the structure sentimentService expects to see.
const transformData = (data) => {
  return (changedData.documents[0].text = data);
};

module.exports.changedData = changedData;
module.exports.transformData = transformData;
