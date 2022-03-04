import {useContext} from 'react';
import {Context} from '../Context.js';
import fetchRandomQuote from './fetchRandomQuote.js';

function useGetNewQuote() {
    const {quoteTxt, auth, recordArr} = useContext(Context);
    const [quoteText, setQuoteText] = quoteTxt;
    const [author, setAuthor] = auth;
    const [recordArray, setRecordArray] = recordArr;

    const getNewQuote = async function newQuote () {        
        let jsonQuote = await fetchRandomQuote();
        setQuoteText(jsonQuote.quote);
        setAuthor(jsonQuote.author);
        const auxArray = recordArray;
        auxArray.push(jsonQuote.id);
        if (auxArray.length > 5) {
            auxArray.shift();
        };
        setRecordArray(auxArray);
    };
    return getNewQuote;
};

export default useGetNewQuote;