import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function SecondToLastQuote() {
    const {quoteTxt, auth, recordArr} = useContext(Context);
    const [quoteText, setQuoteText] = quoteTxt;
    const [author, setAuthor] = auth;
    const [recordArray, setRecordArray] = recordArr;
    
    async function handleButton4Click() {
        if (recordArray.length > 3) {
            const response = await fetch(`/quotes/${recordArray[3]}`);
            let jsonButton4 = await response.json();
            setQuoteText(jsonButton4.quote);
            setAuthor(jsonButton4.author);
        };
    }; 

    return (
        <div>
            <button onClick={handleButton4Click} >4</button>
        </div>
    );
};

export default SecondToLastQuote;