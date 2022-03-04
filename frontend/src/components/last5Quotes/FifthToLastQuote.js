import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function FifthToLastQuote() {
    const {quoteTxt, auth, recordArr} = useContext(Context);
    const [quoteText, setQuoteText] = quoteTxt;
    const [author, setAuthor] = auth;
    const [recordArray, setRecordArray] = recordArr;
    
    async function handleButton1Click() {
        if (recordArray[0] !== '0') {
            const response = await fetch(`/quotes/${recordArray[0]}`);
            let jsonButton1 = await response.json();
            setQuoteText(jsonButton1.quote);
            setAuthor(jsonButton1.author);
        };
    }; 

    return (
        <div>
            <button onClick={handleButton1Click} >1</button>
        </div>
    );
};

export default FifthToLastQuote;