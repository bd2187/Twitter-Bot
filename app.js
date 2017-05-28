var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

function createTweet() {
  var tweet = { status: 'Testing...' };

  function tweetData(err, data, response) {
    return err
    ? console.log('Something went wrong', err)
    : console.log('Success!', data.text);
  }

  T.post('statuses/update', tweet, tweetData);
}

createTweet();
