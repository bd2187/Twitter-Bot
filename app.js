var Twit = require('twit');
var config = require('./config');
var quotes = require('./quotes');

var T = new Twit(config);

function createTweet() {
  var inspirationalQuotes = quotes.inspiration;
  var randomNum = Math.floor(Math.random() * inspirationalQuotes.length);
  var tweet = { status: inspirationalQuotes[randomNum] };

  function tweetData(err, data, response) {
    return err
    ? console.log('Something went wrong', err)
    : console.log('Success!', data.text);
  }

  T.post('statuses/update', tweet, tweetData);
};

setInterval(createTweet, 60000*60);
