# Check Yourself!

Check Yourself! is an application that leverages Azure Cognitive Services to provide insight on how a provided Tweet may be perceived.

# About Check Yourself!
Check Yourself! is a learning project by Eric Hove. It takes an inputed Tweet from the user, submits it to machine-learning models offered by Microsoft Azure, and returns the following data about the Tweet:
* Likelihood that the Tweet will be read positively,
* Likelihood that the Tweet will be read as sexually explicit or adult,
* Likelihood that the Tweet will be read as sexually suggestive or mature,
* Likelihood that the Tweel will be read as profane or offensive,
* Identifies profane or offensive terms found in the Tweet (if any), and
* Provides a recommendation as to whether the Tweet should be revised.

Check Yourself! was last updated on 2020-12-13.

A deployed instance of Check Yourself! may be found at: https://salty-headland-57543.herokuapp.com/ .

The image is from Logan Weaver via unsplash.com. https://unsplash.com/photos/cjF-RQu6O0M .

# Technologies Used
Check Yourself! uses the following technologies:
* ReactJS,
* TypeScript,
* Material-UI,
* NodeJS,
* ExpressJS,
* Heroku,
* Microsoft Azure’s Text Analytics Service, and
* Microsoft Azure’s Content Moderator (for text).

# To Get Started Yourself Locally
1. Clone this repository.
1. Navigate to the root and execute `npm install`. This should install all dependencues used by the back-end and front-end.
1. Create an untracked `.env` file at the root. Should be at the same level as `server.js`.
1. Use or create a Microsoft Azure account.
1. Using your Microsoft Azure account, create a Text Analytics resource. From that resource, copy down the:
   1. API Key
   1. API Endpoint
1. Using your Microsoft Azure account, create a Content Moderator resource. From that resource, copy down the:
   1. API Key
   1. API Endpoint
   1. Location
1. Populate the `.env` file created in #3 with the following values:
