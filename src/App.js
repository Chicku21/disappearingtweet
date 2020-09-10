import React from 'react';
import './App.css';
import TweetList from './components/TweetList';
import Datepicker from './components/Datepicker';







function App() {
  
  return (
    <div className='Tweet-app'>
      
      <Datepicker />
      <TweetList />

      
     
    </div>
    
  );
}

export default App;

