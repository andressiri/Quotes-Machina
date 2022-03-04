import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function ThirdToLastQuote() {
    const {quoteTxt, auth, recordArr} = useContext(Context);
    const [quoteText, setQuoteText] = quoteTxt;
    const [author, setAuthor] = auth;
    const [recordArray, setRecordArray] = recordArr;
    
    async function handleButton3Click() {
        if (recordArray.length > 2) {
            const response = await fetch(`/quotes/${recordArray[2]}`);
            let jsonButton3 = await response.json();
            setQuoteText(jsonButton3.quote);
            setAuthor(jsonButton3.author);
        };
    }; 

    return (
        <div>
            <button onClick={handleButton3Click} >3</button>
        </div>
    );
};

export default ThirdToLastQuote;