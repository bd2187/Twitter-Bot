var Twit = require('twit');
var config = require('./config');
var quotes = require('./quotes');

var T = new Twit(config);

var inspirationalQuotes = quotes.inspiration;

function createTweet() {
  var randomNum = Math.floor(Math.random() * inspirationalQuotes.length);
  var tweet = { status: inspirationalQuotes[randomNum] };

  function tweetData(err, data, response) {
    return err
    ? console.log('Something went wrong', err)
    : console.log('Success!', data.text);
  }

  T.post('statuses/update', tweet, tweetData);
}

createTweet();
