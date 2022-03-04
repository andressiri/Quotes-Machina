import React, {useContext, useEffect} from 'react';
import {Context} from '../Context.js';
import useGetNewQuote from '../functions/useGetNewQuote.js';


function NewQuoteBtn () {
    const {quoteTxt, auth, recordArr} = useContext(Context);
    const [quoteText, setQuoteText] = quoteTxt;
    const [author, setAuthor] = auth;
    const [recordArray, setRecordArray] = recordArr;
    const getNewQuote = useGetNewQuote();

  async function handleNewQuote() {  
    getNewQuote();
  };

  return (
    <button onClick={handleNewQuote}>New quote</button>
  );
};

export default NewQuoteBtn;