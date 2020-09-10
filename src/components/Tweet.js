import React, { useState } from 'react';
import TweetForm from './TweetForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import RangePicker from './Datepicker';


const Tweet = ({ tweets, completeTweet, removeTweet}) => {
 
 

   

  return tweets.map((Tweet, index) => (
    <div
      className={Tweet.isComplete ? 'Tweet-row complete' : 'Tweet-row'}
      key={index}
    >
      <div key={Tweet.id} onClick={() => completeTweet(Tweet.id)}>
        {Tweet.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTweet(Tweet.id)}
          className='delete-icon'
        />
     
  <h6>your tweet will be deleted on the Enddate   </h6>
      </div>
    </div>
  ));
};

export default Tweet;
