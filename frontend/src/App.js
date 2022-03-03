import React, {useContext, useEffect} from 'react';
import {Context} from './Context.js';
import logo from './logo.svg';
import './App.css';

async function fetchRandomQuote() {
  const response = await fetch('/quotes');
  let json = await response.json(); 
  return json;
};

function App() {
  const {quoteTxt, auth} = useContext(Context);
  const [quoteText, setQuoteText] = quoteTxt;
  const [author, setAuthor] = auth;

  async function getVariables() {
    let jsonQuote = await fetchRandomQuote();
    setQuoteText(jsonQuote.quote);
    setAuthor(jsonQuote.author);
  };

  useEffect(() => {getVariables()}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{quoteText}</h1>
        <h3>{author}</h3>
      </header>
    </div>
  );
}

export default App;
