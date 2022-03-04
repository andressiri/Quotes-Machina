import React, {useContext, useEffect} from 'react';
import {Context} from './Context.js';
import logo from './logo.svg';
import './App.css';
import useGetNewQuote from './functions/useGetNewQuote.js';
import Last5Quotes from './components/last5Quotes/Last5Quotes.js';

function App() {
  const {quoteTxt, auth} = useContext(Context);
  const [quoteText, setQuoteText] = quoteTxt;
  const [author, setAuthor] = auth;
  const getNewQuote = useGetNewQuote();
  
  useEffect(() => {
    getNewQuote();
    setInterval(getNewQuote, 5000); 
  }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{quoteText}</h1>
        <h3>{author}</h3>
        <Last5Quotes />
      </header>
    </div>
  );
}

export default App;
