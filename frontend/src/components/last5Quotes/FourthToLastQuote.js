import React, {useContext} from 'react';
import {Context} from '../../Context.js';

function FourthToLastQuote() {
    const {quoteTxt, auth, recordArr} = useContext(Context);
    const [quoteText, setQuoteText] = quoteTxt;
    const [author, setAuthor] = auth;
    const [recordArray, setRecordArray] = recordArr;

    
    async function handleButton2Click() {
        if (recordArray.length > 1) {
            const response = await fetch(`/quotes/${recordArray[1]}`);
            let jsonButton2 = await response.json();
            setQuoteText(jsonButton2.quote);
            setAuthor(jsonButton2.author);
        };
    }; 

    return (
        <div>
            <button onClick={handleButton2Click} >2</button>
        </div>
    );
};

export default FourthToLastQuote;