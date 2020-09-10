import React, { useState } from 'react';
import TweetForm from './TweetForm';
import Tweet from './Tweet';
import moment from 'moment';


function TweetList() {
  const [tweets, setTweets] = useState([]);

  const addTweet= tweet => {
    if (!tweet.text || /^\s*$/.test(tweet.text)) {
      return;
    }

    const newTweets = [tweet, ...tweets];

    setTweets(newTweets);
    console.log(...tweets);
  };

 

  const removeTweet = id => {
    const removedArr = [...tweets].filter(tweet => tweet.id !== id);

    setTweets(removedArr);
  };

  const completeTweet = id => {
    let updatedTweets = tweets.map(tweet => {
      if (tweet.id === id) {
        tweet.isComplete = !tweet.isComplete;
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  return (
    <>
      <h1 className="welcome__header">Welcome to Disappearing Tweets, write your tweet and select Disappearing time?</h1>
      <TweetForm onSubmit={addTweet} />
      <Tweet
        tweets={tweets}
        completeTweet={completeTweet}
        removeTweet={removeTweet}
        
      />
    </>
  );
}

export default TweetList;
