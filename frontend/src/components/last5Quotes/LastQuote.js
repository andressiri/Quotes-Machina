import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function LastQuote() {
    const {quoteTxt, auth, recordArr} = useContext(Context);
    const [quoteText, setQuoteText] = quoteTxt;
    const [author, setAuthor] = auth;
    const [recordArray, setRecordArray] = recordArr;
    
    async function handleButton5Click() {
        if (recordArray.length > 4) {            
            const response = await fetch(`/quotes/${recordArray[4]}`);            
            let jsonButton5 = await response.json();
            setQuoteText(jsonButton5.quote);
            setAuthor(jsonButton5.author);
        };
    }; 

    return (
        <div>
            <button onClick={handleButton5Click} >5</button>
        </div>
    );
};

export default LastQuote;